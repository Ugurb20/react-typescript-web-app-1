import { Container } from 'inversify';
import { ClientRepository } from '@domain/repositories/client';
import { ClientListUseCase } from '@domain/usecases/client/list';
import { getTestContainer } from '@common/inversion-container-test';

describe('ClientListUseCase', () => {
	let container : Container;
	let clientRepository: ClientRepository;
	let clientListUseCase: ClientListUseCase;
	beforeEach(() => {
		container = getTestContainer();
		clientRepository = container.get(ClientRepository);
		clientListUseCase = container.get(ClientListUseCase);
	});
	it('should be defined', () => {
		expect(clientListUseCase).toBeDefined();
	});
	describe('call', () => {
		it('should call repository.list', async () => {
			const repositoryListSpy = jest.spyOn(clientRepository, 'list');
			repositoryListSpy.mockResolvedValue([]);
			await clientListUseCase.call({ page: 1, pageSize: 10 });
			expect(repositoryListSpy).toHaveBeenCalled();
			expect(repositoryListSpy).toHaveBeenCalledWith({ page: 1, pageSize: 10 });
		});
	});
});
