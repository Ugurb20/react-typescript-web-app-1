import { getTestContainer } from '@common/inversion-container-test';
import { BranchRepository } from '@domain/repositories/branch';
import { BranchGetAllUseCase } from '@domain/usecases/branch/get-all';
import { Container } from 'inversify';

describe('BranchGetAllUseCase', () => {
	let container: Container;
	let branchRepository: BranchRepository;
	let branchGetAllUseCase: BranchGetAllUseCase;
	beforeAll(() => {
		container = getTestContainer();
		branchRepository = container.get(BranchRepository);
		branchGetAllUseCase = container.get(BranchGetAllUseCase);
	});
	it('should be defined', () => {
		expect(branchGetAllUseCase).toBeDefined();
	});
	it('should call branchRepository.getAll', async () => {
		const spy = jest.spyOn(branchRepository, 'getAll');
		spy.mockResolvedValue([]);
		await branchGetAllUseCase.call();
		expect(spy).toHaveBeenCalled();
	});
});
