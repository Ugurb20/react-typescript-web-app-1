import { injectable } from 'inversify';
import { Repository } from '@domain/repositories/repository';
import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { PaginationResponse } from '@domain/types/common/pagination-response';
import { AppointmentQueryRequest } from '@domain/types/requests/appointment/filter';

@injectable()
export abstract class AppointmentRepository extends Repository {
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
