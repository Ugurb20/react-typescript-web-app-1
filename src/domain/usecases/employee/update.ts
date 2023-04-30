import { inject, injectable } from 'inversify';
import { EmployeeUpdateRequest } from '@domain/types/requests/employee/update';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { UseCase } from '@common/use-case';
import { EmployeeRepository } from '@domain/repositories/employee';

@injectable()
export class EmployeeUpdateUseCase
implements UseCase<EmployeeUpdateRequest, Promise<EmployeeEntity>>
{
	constructor(
    @inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository
	) {}

	call(request: EmployeeUpdateRequest): Promise<EmployeeEntity> {
		return this.employeeRepository.update(request);
	}
}
