import { BranchRepository } from '@domain/repositories/branch';
import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';

@injectable()
export class BranchDeleteUseCase implements UseCase<number, Promise<void>> {
  constructor(
    @inject(BranchRepository)
    private readonly branchRepository: BranchRepository
  ) {}
  call(id: number): Promise<void> {
    return this.branchRepository.delete(id);
  }
}
