import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { BranchEntity } from '@domain/types/entities/branch';
import { BranchRepository } from '@domain/repositories/branch';

@injectable()
export class BranchGetUseCase
implements UseCase<number, Promise<BranchEntity>>
{
	constructor(
    @inject(BranchRepository)
    private readonly branchRepository: BranchRepository
	) {}

	call(id: number): Promise<BranchEntity> {
		return this.branchRepository.get(id);
	}
}
