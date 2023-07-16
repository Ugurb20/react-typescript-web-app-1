import { Container } from 'inversify';
import { ClientRepository } from '@domain/repositories/client';
import { ClientRemoteDataSource } from '@data/datasources/client/index.remote';
import { ClientLocalDataSource } from '@data/datasources/client/index.local';
import { getTestContainer } from '@common/inversion-container-test';

describe('ClientRepositoryImpl', () => {
	let container: Container;
	let clientRepository: ClientRepository;
	let clientRemoteDataSource: ClientRemoteDataSource;
	let clientLocalDataSource: ClientLocalDataSource;
	beforeEach(() => {
		container = getTestContainer();
		clientRepository = container.get<ClientRepository>(ClientRepository);
		clientRemoteDataSource = container.get<ClientRemoteDataSource>(ClientRemoteDataSource);
		clientLocalDataSource = container.get<ClientLocalDataSource>(ClientLocalDataSource);
	});
	it('should be defined', () => {
		expect(clientRepository).toBeDefined();
	});
	describe('list', () => {
		it('should return data from remote data source if not exist in local', async () => {
			clientLocalDataSource.get = jest.fn().mockReturnValue(null);
			clientLocalDataSource.save = jest.fn();
			clientRemoteDataSource.list = jest.fn().mockResolvedValue([]);
			const result = await clientRepository.list({});
			expect(result).toEqual([]);
			expect(clientLocalDataSource.get).toBeCalledTimes(1);
			expect(clientLocalDataSource.save).toBeCalledTimes(1);
			expect(clientRemoteDataSource.list).toBeCalledTimes(1);
		});
		it('should return data from local data source if exist in local', async () => {
			clientLocalDataSource.get = jest.fn().mockReturnValue([]);
			clientLocalDataSource.save = jest.fn();
			clientRemoteDataSource.list = jest.fn().mockResolvedValue([]);
			const result = await clientRepository.list({});
			expect(result).toEqual([]);
			expect(clientLocalDataSource.get).toBeCalledTimes(1);
			expect(clientLocalDataSource.save).toBeCalledTimes(0);
			expect(clientRemoteDataSource.list).toBeCalledTimes(0);
		});
	});
});
