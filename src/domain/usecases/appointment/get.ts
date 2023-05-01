import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentRepository } from '@domain/repositories/appointment';

@injectable()
export class AppointmentGetUseCase
implements UseCase<number, Promise<AppointmentEntity>>
{
	constructor(
    @inject(AppointmentRepository)
    private appointmentRepository: AppointmentRepository
	) {}

	call(id: number): Promise<AppointmentEntity> {
		return this.appointmentRepository.get(id);
	}
}
