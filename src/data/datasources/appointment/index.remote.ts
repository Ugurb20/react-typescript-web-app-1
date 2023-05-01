import { injectable } from 'inversify';
import { RemoteDataSource } from '@data/remote-data-source';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { PaginationResponse } from '@domain/types/common/pagination-response';
import { AppointmentQueryRequest } from '@domain/types/requests/appointment/filter';

@injectable()
export abstract class AppointmentRemoteDataSource extends RemoteDataSource {
  abstract create(
    request: AppointmentCreateRequest
  ): Promise<AppointmentEntity>;

  abstract get(id: number): Promise<AppointmentEntity>;

  abstract patch(
    request: Partial<AppointmentEntity>
  ): Promise<AppointmentEntity>;

  abstract query(
    request: AppointmentQueryRequest
  ): Promise<PaginationResponse<AppointmentEntity>>;
}
