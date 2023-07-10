import React from 'react';
import { AppointmentCardWrapper } from '@components/cards/appointment-card';
import { AppointmentLayout } from '@domain/interfaces/appointment-layout';

interface CalendarColumnProps {
  startHour: number;
  endHour: number;
  appointments: AppointmentLayout[];
  boxWidth: string;
  boxHeight: string;
}
export const CalendarColumnDumb: React.FC<CalendarColumnProps> = ({
	startHour,
	endHour,
	boxWidth,
	boxHeight,
	appointments,
}) => {
	const hours = Array.from(
		{ length: endHour - startHour },
		(_, i) => startHour + i
	);

	return (
		<div
			style={{
				width: boxWidth,
			}}
			data-testid={'calendar-column'}
		>
			{hours.map(hour => (
				<div
					key={hour}
					style={{
						border: '1px solid #D9D9D9',
						borderBottom: hour === endHour - 1 ? '1px solid #D9D9D9' : 'none',
						width: boxWidth,
						height: boxHeight,
					}}
				></div>
			))}
			<>
				{appointments.map(appointment => {
					const { id } = appointment.appointment;
					return <AppointmentCardWrapper layout={appointment} key={id} />;
				})}
			</>
		</div>
	);
};
