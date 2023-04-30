import { getTestContainer } from '@common/inversion-container-test';
import { BranchEntity } from '@domain/types/entities/branch';
import { UpdateBranchRequest } from '@domain/types/requests/branch/update';
import { BranchUpdateUseCase } from '@domain/usecases/branch/update';
import { BranchRepository } from '@domain/repositories/branch';
import { Container } from 'inversify';

describe('BranchUpdateUseCase', () => {
  let container: Container;
  let branchRepository: BranchRepository;
  let branchUpdateUseCase: BranchUpdateUseCase;
  beforeAll(() => {
    container = getTestContainer();
    branchRepository = container.get(BranchRepository);
    branchUpdateUseCase = container.get(BranchUpdateUseCase);
  });
  it('should be defined', () => {
    expect(branchUpdateUseCase).toBeDefined();
  });
  it('should call branchRepository.update', async () => {
    const spy = jest.spyOn(branchRepository, 'update');
    spy.mockResolvedValue({} as BranchEntity);
    const request = { id: 1, name: 'test' } as UpdateBranchRequest;
    await branchUpdateUseCase.call(request);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith(request);
  });
});
