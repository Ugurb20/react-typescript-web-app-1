import { BranchDailyEmployeesUseCase } from '@domain/usecases/branch/daily-employees';
import { BranchRepository } from '@domain/repositories/branch';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';

describe('BranchDailyEmployeesUseCase', () => {
	let container: Container;
	let branchRepository: BranchRepository;
	let branchDailyEmployeesUseCase: BranchDailyEmployeesUseCase;
	beforeAll(() => {
		container = getTestContainer();
		branchRepository = container.get(BranchRepository);
		branchDailyEmployeesUseCase = container.get(BranchDailyEmployeesUseCase);
	});
	it('should be defined', () => {
		expect(BranchDailyEmployeesUseCase).toBeDefined();
	});
	it('should call branchRepository.dailyEmployees', async () => {
		const spy = jest.spyOn(branchRepository, 'dailyEmployees');
		spy.mockResolvedValue([]);
		const params = {
			id: 1,
			date: new Date().toDateString(),
		} as BranchDailyInformationRequest;
		await branchDailyEmployeesUseCase.call(params);
		expect(spy).toHaveBeenCalled();
		expect(spy).toHaveBeenCalledWith(params);
	});
});
