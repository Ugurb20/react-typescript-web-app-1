import { EmployeeRepository } from '@domain/repositories/employee';
import { inject, injectable } from 'inversify';
import { EmployeeRemoteDataSource } from '@data/datasources/employee/index.remote';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { EmployeeUpdateRequest } from '@domain/types/requests/employee/update';

@injectable()
export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor(
    @inject(EmployeeRemoteDataSource)
    private readonly employeeRemoteDataSource: EmployeeRemoteDataSource
  ) {}

  create(): Promise<EmployeeEntity> {
    return this.employeeRemoteDataSource.create();
  }

  delete(id: number): Promise<void> {
    return this.employeeRemoteDataSource.delete(id);
  }

  get(id: number): Promise<EmployeeEntity> {
    return this.employeeRemoteDataSource.get(id);
  }

  update(request: EmployeeUpdateRequest): Promise<EmployeeEntity> {
    return this.employeeRemoteDataSource.update(request);
  }

  groomers(): Promise<EmployeeEntity[]> {
    return this.employeeRemoteDataSource.groomers();
  }
}
