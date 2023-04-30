import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';
import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';
import { BranchRepository } from '@domain/repositories/branch';

@injectable()
export class BranchDailyInformationUseCase
  implements
    UseCase<
      BranchDailyInformationRequest,
      Promise<BranchDailyInformationResponse>
    >
{
  constructor(
    @inject(BranchRepository)
    private readonly branchRepository: BranchRepository
  ) {}
  call(
    parameters: BranchDailyInformationRequest
  ): Promise<BranchDailyInformationResponse> {
    return this.branchRepository.dailyInformation(parameters);
  }
}
