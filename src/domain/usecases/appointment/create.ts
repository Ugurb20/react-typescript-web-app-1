import { inject, injectable } from 'inversify';
import { AppointmentCreateRequest } from '@domain/types/requests/appointment/create';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { UseCase } from '@common/use-case';
import { AppointmentRepository } from '@domain/repositories/appointment';

@injectable()
export class AppointmentCreateUseCase
implements UseCase<AppointmentCreateRequest, Promise<AppointmentEntity>>
{
	constructor(
    @inject(AppointmentRepository)
    private appointmentRepository: AppointmentRepository
	) {}

	call(request: AppointmentCreateRequest): Promise<AppointmentEntity> {
		return this.appointmentRepository.create(request);
	}
}
