import { inject, injectable } from 'inversify';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { UseCase } from '@common/use-case';
import { AppointmentRepository } from '@domain/repositories/appointment';

@injectable()
export class AppointmentPatchUseCase
implements UseCase<Partial<AppointmentEntity>, Promise<AppointmentEntity>>
{
	constructor(
    @inject(AppointmentRepository)
    private appointmentRepository: AppointmentRepository
	) {}

	call(request: Partial<AppointmentEntity>): Promise<AppointmentEntity> {
		return this.appointmentRepository.patch(request);
	}
}
