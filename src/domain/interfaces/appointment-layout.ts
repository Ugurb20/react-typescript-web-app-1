import { AppointmentEntity } from '@domain/types/entities/appointment';

export class AppointmentLayout {
	left: number;

	right: number;

	appointment: AppointmentEntity;

	constructor(appointment: AppointmentEntity, left = 0, right = 0) {
		this.appointment = appointment;
		this.left = left;
		this.right = right;
	}
}
