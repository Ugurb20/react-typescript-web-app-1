import { inject, injectable } from 'inversify';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { UseCase } from '@common/use-case';
import { EmployeeRepository } from '@domain/repositories/employee';

@injectable()
export class EmployeeCreateUseCase
  implements UseCase<void, Promise<EmployeeEntity>>
{
  constructor(
    @inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository
  ) {}
  call(): Promise<EmployeeEntity> {
    return this.employeeRepository.create();
  }
}
