import { BranchDeleteUseCase } from '@domain/usecases/branch/delete';
import { BranchRepository } from '@domain/repositories/branch';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';

describe('BranchDeleteUseCase', () => {
	let container: Container;
	let branchRepository: BranchRepository;
	let branchDeleteUseCase: BranchDeleteUseCase;
	beforeAll(() => {
		container = getTestContainer();
		branchRepository = container.get(BranchRepository);
		branchDeleteUseCase = container.get(BranchDeleteUseCase);
	});
	it('should be defined', () => {
		expect(BranchDeleteUseCase).toBeDefined();
	});
	it('should call branchRepository.delete', async () => {
		const spy = jest.spyOn(branchRepository, 'delete');
		spy.mockResolvedValue();
		const params = 1;
		await branchDeleteUseCase.call(params);
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(params);
	});
});
