import { injectable } from 'inversify';
import { BranchEntity } from '@domain/types/entities/branch';
import { UpdateBranchRequest } from '@domain/types/requests/branch/update';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';
import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';

@injectable()
export abstract class BranchRepository {
  abstract create(): Promise<BranchEntity>;

  abstract update(request: UpdateBranchRequest): Promise<BranchEntity>;

  abstract delete(id: number): Promise<void>;

  abstract get(id: number): Promise<BranchEntity>;

  abstract getAll(): Promise<BranchEntity[]>;

  abstract daily(
    request: BranchDailyInformationRequest
  ): Promise<BranchDailyInformationResponse>;
}
