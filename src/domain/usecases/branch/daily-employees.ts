import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { BranchDailyInformationRequest } from '@domain/types/requests/branch/daily';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { BranchRepository } from '@domain/repositories/branch';

@injectable()
export class BranchDailyEmployeesUseCase
  implements UseCase<BranchDailyInformationRequest, Promise<EmployeeEntity[]>>
{
  constructor(
    @inject(BranchRepository)
    private readonly branchRepository: BranchRepository
  ) {}
  call(request: BranchDailyInformationRequest): Promise<EmployeeEntity[]> {
    return this.branchRepository.dailyEmployees(request);
  }
}
