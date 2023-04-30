import { inject, injectable } from 'inversify';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { UseCase } from '@common/use-case';
import { EmployeeRepository } from '@domain/repositories/employee';

@injectable()
export class EmployeeGroomersUseCase
implements UseCase<void, Promise<EmployeeEntity[]>>
{
	constructor(
    @inject(EmployeeRepository)
    private readonly employerRepository: EmployeeRepository
	) {}

	call(): Promise<EmployeeEntity[]> {
		return this.employerRepository.groomers();
	}
}
