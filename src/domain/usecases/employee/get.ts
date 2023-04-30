import { inject, injectable } from 'inversify';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { UseCase } from '@common/use-case';
import { EmployeeRepository } from '@domain/repositories/employee';

@injectable()
export class EmployeeGetUseCase
implements UseCase<number, Promise<EmployeeEntity>>
{
	constructor(
    @inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository
	) {}

	call(id: number): Promise<EmployeeEntity> {
		return this.employeeRepository.get(id);
	}
}
