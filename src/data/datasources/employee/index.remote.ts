import { injectable } from 'inversify';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { EmployeeUpdateRequest } from '@domain/types/requests/employee/update';

@injectable()
export abstract class EmployeeRemoteDataSource {
  abstract create(): Promise<EmployeeEntity>;

  abstract update(request: EmployeeUpdateRequest): Promise<EmployeeEntity>;

  abstract delete(id: number): Promise<void>;

  abstract get(id: number): Promise<EmployeeEntity>;

  abstract groomers(): Promise<EmployeeEntity[]>;
}
