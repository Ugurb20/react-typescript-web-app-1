import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';
import { mock } from 'jest-mock-extended';
import { BranchDailyInformationUseCase } from '@domain/usecases/branch/daily-information';
import { BranchRepository } from '@domain/repositories/branch';
import { Container } from 'inversify';
import { getTestContainer } from '@common/inversion-container-test';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';

describe('BranchDailyInformationUseCase', () => {
  let container: Container;
  let branchRepository: BranchRepository;
  let branchDailyInformationUseCase: BranchDailyInformationUseCase;
  beforeAll(() => {
    container = getTestContainer();
    branchRepository = container.get(BranchRepository);
    branchDailyInformationUseCase = container.get(
      BranchDailyInformationUseCase
    );
  });
  it('should be defined', () => {
    expect(BranchDailyInformationUseCase).toBeDefined();
  });
  it('should call branchRepository.dailyInformation', async () => {
    const spy = jest.spyOn(branchRepository, 'dailyInformation');
    spy.mockResolvedValue(mock<BranchDailyInformationResponse>());
    const params = {
      id: 1,
      date: new Date().toDateString(),
    } as BranchDailyInformationRequest;
    await branchDailyInformationUseCase.call(params);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(params);
  });
});
