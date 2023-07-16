import { getTestContainer } from '@common/inversion-container-test';
import { ClientRemoteDataSource } from '@data/datasources/client/index.remote';
import { Container } from 'inversify';
import mockAxios from 'jest-mock-axios';
import { CustomerMockGenerator } from '@test/__mocks__/types/entities/customer';

describe('ClientRemoteDataSource', function () {

	const generator = new CustomerMockGenerator();

	let container: Container;
	let clientRemoteDataSource: ClientRemoteDataSource;


	beforeEach(() => {
		container  = getTestContainer();
		clientRemoteDataSource = container.get<ClientRemoteDataSource>(ClientRemoteDataSource);
	});

	it('should be defined', () => {
		expect(clientRemoteDataSource).toBeDefined();
	});

	describe('listClients', () => {
		it('should be implemented', () => {
			expect(clientRemoteDataSource.list).toBeDefined();
		});
		it('should return a list of clients', async () => {
			const data = generator.generateMany(20);
			mockAxios.get.mockResolvedValueOnce({ data });
			const response = await clientRemoteDataSource.list({});
			expect(response).toEqual(data);
			expect(mockAxios.get).toHaveBeenCalledTimes(1);
			expect(mockAxios.get).toHaveBeenCalledWith('/api/scheduling/customers', { params: {} });
		});
	});
});
