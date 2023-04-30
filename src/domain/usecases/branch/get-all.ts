import { inject, injectable } from 'inversify';
import { BranchEntity } from '@domain/types/entities/branch';
import { UseCase } from '@common/use-case';
import { BranchRepository } from '@domain/repositories/branch';

@injectable()
export class BranchGetAllUseCase
implements UseCase<void, Promise<BranchEntity[]>>
{
	constructor(
    @inject(BranchRepository)
    private readonly branchRepository: BranchRepository
	) {}

	call(): Promise<BranchEntity[]> {
		return this.branchRepository.getAll();
	}
}
