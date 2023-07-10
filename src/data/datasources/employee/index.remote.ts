import { injectable } from 'inversify';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { EmployeeUpdateRequest } from '@domain/types/requests/employee/update';
import { RemoteDataSource } from '@domain/interfaces/remote-data-source';

@injectable()
export abstract class EmployeeRemoteDataSource extends RemoteDataSource {
  abstract create(): Promise<EmployeeEntity>;

  abstract update(request: EmployeeUpdateRequest): Promise<EmployeeEntity>;

  abstract delete(id: number): Promise<void>;

  abstract get(id: number): Promise<EmployeeEntity>;

  abstract groomers(): Promise<EmployeeEntity[]>;
}
