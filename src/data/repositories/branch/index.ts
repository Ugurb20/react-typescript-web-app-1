import { inject, injectable } from 'inversify';
import { BranchRepository } from '@domain/repositories/branch';
import { BranchRemoteDataSource } from '@data/datasources/branch/index.remote';
import { BranchEntity } from '@domain/types/entities/branch';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';
import { BranchUpdateRequest } from '@domain/types/requests/branch/update';

@injectable()
export class BranchRepositoryImpl implements BranchRepository {
	constructor(
    @inject(BranchRemoteDataSource)
    private readonly branchRemoteDataSource: BranchRemoteDataSource
	) {}

	dailyEmployees(
		request: BranchDailyInformationRequest
	): Promise<EmployeeEntity[]> {
		return this.branchRemoteDataSource.dailyEmployees(request);
	}

	dailyInformation(
		request: BranchDailyInformationRequest
	): Promise<BranchDailyInformationResponse> {
		return this.branchRemoteDataSource.dailyInformation(request);
	}

	delete(id: number): Promise<void> {
		return this.branchRemoteDataSource.delete(id);
	}

	get(id: number): Promise<BranchEntity> {
		return this.branchRemoteDataSource.get(id);
	}

	getAll(): Promise<BranchEntity[]> {
		return this.branchRemoteDataSource.getAll();
	}

	update(request: BranchUpdateRequest): Promise<BranchEntity> {
		return this.branchRemoteDataSource.update(request);
	}

	create(): Promise<BranchEntity> {
		return this.branchRemoteDataSource.create();
	}
}
