import { Container } from 'inversify';
import { BranchCreateUseCase } from '@domain/usecases/branch/create';
import { BranchRepository } from '@domain/repositories/branch';
import { getTestContainer } from '@common/inversion-container-test';
import { BranchEntity } from '@domain/types/entities/branch';
import { mock } from 'jest-mock-extended';

describe('BranchCreateUseCase', () => {
  let container: Container;
  let branchCreateUseCase: BranchCreateUseCase;
  let branchRepository: BranchRepository;
  beforeAll(() => {
    container = getTestContainer();
    branchCreateUseCase =
      container.get<BranchCreateUseCase>(BranchCreateUseCase);
    branchRepository = container.get<BranchRepository>(BranchRepository);
  });
  it('should be defined', () => {
    expect(branchCreateUseCase).toBeDefined();
  });
  it('should call create', async () => {
    const spy = jest.spyOn(branchRepository, 'create');
    spy.mockResolvedValue(mock<BranchEntity>());
    await branchCreateUseCase.call();
    expect(spy).toBeCalled();
    expect(spy).toBeCalledWith();
  });
});
