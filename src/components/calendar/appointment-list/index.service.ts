import { AppointmentEntity } from '@domain/types/entities/appointment';
import { inject, injectable } from 'inversify';
import { AppointmentPatchUseCase } from '@domain/usecases/appointment/patch';
import { AppointmentFilterUseCase } from '@domain/usecases/appointment/filter';
import { IService } from '@domain/interfaces/service';

@injectable()
export class AppointmentListService implements IService {
	constructor(
    @inject(AppointmentPatchUseCase)
    private readonly appointmentPatchUseCase: AppointmentPatchUseCase,
    @inject(AppointmentFilterUseCase)
    private readonly appointmentFilterUseCase: AppointmentFilterUseCase
	) {}

	async getPendingAppointments(): Promise<AppointmentEntity[]> {
		const { results } = await this.appointmentFilterUseCase.call({
			status: 'Pending',
			limit: 50,
			start__gt: new Date().toISOString(),
		});
		return results;
	}

	async getCancelledAppointments(): Promise<AppointmentEntity[]> {
		const { results } = await this.appointmentFilterUseCase.call({
			status: 'Cancelled',
			limit: 50,
			start__gt: new Date().toISOString(),
		});
		return results;
	}

	async getWaitlistAppointments(): Promise<AppointmentEntity[]> {
		const { results } = await this.appointmentFilterUseCase.call({
			status: 'Rescheduling',
			limit: 50,
			start__gt: new Date().toISOString(),
		});
		return results;
	}
}
