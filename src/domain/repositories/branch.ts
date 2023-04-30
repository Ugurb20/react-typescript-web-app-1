import { injectable } from 'inversify';
import { BranchEntity } from '@domain/types/entities/branch';
import { BranchUpdateRequest } from '@domain/types/requests/branch/update';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';
import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';
import { EmployeeEntity } from '@domain/types/entities/employee';

@injectable()
export abstract class BranchRepository {
  abstract create(): Promise<BranchEntity>;

  abstract update(request: BranchUpdateRequest): Promise<BranchEntity>;

  abstract delete(id: number): Promise<void>;

  abstract get(id: number): Promise<BranchEntity>;

  abstract getAll(): Promise<BranchEntity[]>;

  abstract dailyInformation(
    request: BranchDailyInformationRequest
  ): Promise<BranchDailyInformationResponse>;

  abstract dailyEmployees(
    request: BranchDailyInformationRequest
  ): Promise<EmployeeEntity[]>;
}
