import { inject, injectable } from 'inversify';
import { AppointmentQueryRequest } from '@domain/types/requests/appointment/filter';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { UseCase } from '@common/use-case';
import { AppointmentRepository } from '@domain/repositories/appointment';
import { PaginationResponse } from '@domain/types/common/pagination-response';

@injectable()
export class AppointmentFilterUseCase
implements
    UseCase<
      AppointmentQueryRequest,
      Promise<PaginationResponse<AppointmentEntity>>
    >
{
	constructor(
    @inject(AppointmentRepository)
    private appointmentRepository: AppointmentRepository
	) {}

	call(
		request: AppointmentQueryRequest
	): Promise<PaginationResponse<AppointmentEntity>> {
		return this.appointmentRepository.query(request);
	}
}
