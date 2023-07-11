/* eslint-disable  sonarjs/cognitive-complexity */
/* eslint-disable  unicorn/prefer-spread */
import { injectable } from 'inversify';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentLayout } from '@domain/interfaces/appointment-layout';
import { IService } from '@domain/interfaces/service';

export class DateAppointmentEntity {
	private appointment: AppointmentEntity;

	constructor(appointment: AppointmentEntity) {
		this.appointment = appointment;
	}

	get start(): Date {
		return new Date(this.appointment.start);
	}

	get end(): Date {
		return new Date(this.appointment.end);
	}

	get entity(): AppointmentEntity {
		return this.appointment;
	}
}

@injectable()
export class LayoutAlgorithm implements IService {
	layoutAppointments(appointments: AppointmentEntity[]): AppointmentLayout[] {
		const dateAppointments = appointments.map(
			a => new DateAppointmentEntity(a)
		);
		let columns: AppointmentLayout[][] = [];
		let cleared: AppointmentLayout[] = [];
		let lastEventEnding: Date | null = null;

		dateAppointments.sort((a, b) => {
			if (a.start.getTime() === b.start.getTime()) {
				return a.end.getTime() - b.end.getTime();
			}
			return a.start.getTime() - b.start.getTime();
		});

		for (const appointment of dateAppointments) {
			if (
				lastEventEnding === null ||
        appointment.start.getTime() > lastEventEnding.getTime()
			) {
				this.packAppointments(columns);
				cleared = cleared.concat(...columns);
				columns = [];
				lastEventEnding = null;
			}

			let placed = false;
			for (const col of columns) {
				if (
					!this.collidesWith(
						col[col.length - 1].appointment,
						appointment.entity
					)
				) {
					col.push(new AppointmentLayout(appointment.entity));
					placed = true;
					break;
				}
			}
			if (!placed) {
				columns.push([new AppointmentLayout(appointment.entity)]);
			}
			if (
				lastEventEnding === null ||
        appointment.end.getTime() > lastEventEnding.getTime()
			) {
				lastEventEnding = appointment.end;
			}
		}
		if (columns.length > 0) {
			this.packAppointments(columns);
			cleared = cleared.concat(...columns);
		}
		return cleared;
	}

	collidesWith(a: AppointmentEntity, b: AppointmentEntity): boolean {
		return (
			new Date(a.start).getTime() < new Date(b.end).getTime() &&
      new Date(a.end).getTime() > new Date(b.start).getTime()
		);
	}

	packAppointments(columns: AppointmentLayout[][]): void {
		const numColumns = columns.length;
		let iColumn = 0;
		for (const col of columns) {
			for (const ev of col) {
				const colSpan = this.expandAppointments(ev, iColumn, columns);
				ev.left = iColumn / numColumns;
				ev.right = (iColumn + colSpan) / numColumns;
			}
			iColumn++;
		}
	}

	expandAppointments(
		ev: AppointmentLayout,
		iColumn: number,
		columns: AppointmentLayout[][]
	): number {
		let colSpan = 1;
		for (const col of columns.slice(iColumn + 1)) {
			for (const ev1 of col) {
				if (this.collidesWith(ev.appointment, ev1.appointment)) {
					return colSpan;
				}
			}
			colSpan++;
		}
		return colSpan;
	}
}
