import { BranchGetUseCase } from '@domain/usecases/branch/get';
import { Container } from 'inversify';
import { BranchRepository } from '@domain/repositories/branch';
import { BranchEntity } from '@domain/types/entities/branch';
import { mock } from 'jest-mock-extended';

describe('BranchGetUseCase', () => {
	let container: Container;
	let branchRepository: BranchRepository;
	let branchGetUseCase: BranchGetUseCase;
	beforeAll(() => {
		container = new Container();
		branchRepository = {
			get: jest.fn(),
		} as any;
		container.bind(BranchRepository).toConstantValue(branchRepository);
		branchGetUseCase = container.resolve(BranchGetUseCase);
	});

	it('should call branchRepository.get', async () => {
		const id = 1;
		const spy = jest.spyOn(branchRepository, 'get');
		spy.mockResolvedValueOnce(mock<BranchEntity>());
		await branchGetUseCase.call(id);
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(id);
	});
});
