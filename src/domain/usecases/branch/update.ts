import { inject, injectable } from 'inversify';
import { BranchEntity } from '@domain/types/entities/branch';
import { BranchRepository } from '@domain/repositories/branch';
import { UseCase } from '@common/use-case';
import { BranchUpdateRequest } from '@domain/types/requests/branch/update';

@injectable()
export class BranchUpdateUseCase
implements UseCase<BranchUpdateRequest, Promise<BranchEntity>>
{
	constructor(
    @inject(BranchRepository)
    private readonly branchRepository: BranchRepository
	) {}

	call(request: BranchUpdateRequest): Promise<BranchEntity> {
		return this.branchRepository.update(request);
	}
}
