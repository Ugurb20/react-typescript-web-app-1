import { inject, injectable } from 'inversify';
import { BranchEntity } from '@domain/types/entities/branch';
import { BranchRepository } from '@domain/repositories/branch';
import { UseCase } from '@common/use-case';
import { UpdateBranchRequest } from '@domain/types/requests/branch/update';

@injectable()
export class BranchUpdateUseCase
  implements UseCase<UpdateBranchRequest, Promise<BranchEntity>>
{
  constructor(
    @inject(BranchRepository)
    private readonly branchRepository: BranchRepository
  ) {}

  call(request: UpdateBranchRequest): Promise<BranchEntity> {
    return this.branchRepository.update(request);
  }
}
