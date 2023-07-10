import { AppointmentListItem } from '@components/calendar/appointment-list/components/list-item';
import React from 'react';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import style from './index.module.scss';

export interface AppointmentsColumnProps {
  appointments: AppointmentEntity[];
}

export const AppointmentsColumn: React.FC<AppointmentsColumnProps> = ({
	appointments = [],
}) => {
	return appointments.length === 0 ? (
		<div className={style.appointmentsColumn}>
			<h3>No appointments</h3>
		</div>
	) : (
		<div className={style.appointmentsColumn}>
			{appointments.map(appointment => (
				<AppointmentListItem key={appointment.id} appointment={appointment} />
			))}
		</div>
	);
};
