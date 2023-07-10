import { inject, injectable } from 'inversify';
import { EmployeeRepository } from '@domain/repositories/employee';
import { UseCase } from '@common/use-case';

@injectable()
export class EmployeeDeleteUseCase implements UseCase<number, void> {
	constructor(
    @inject(EmployeeRepository)
    private readonly employeeRepository: EmployeeRepository
	) {}

	call(id: number): Promise<void> {
		return this.employeeRepository.delete(id);
	}
}
