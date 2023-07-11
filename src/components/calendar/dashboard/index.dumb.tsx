import React from 'react';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { ICalendarItem } from '@domain/interfaces/calendar-item';
import CalendarColumn from '@components/calendar/column';
import style from './index.module.scss';
import { HourColumn } from '@components/calendar/hour-column';
import useCalendarContext from '@domain/hooks/calendar/use-calendar-context';
import { END_HOUR, START_HOUR } from '@common/app.constants';

export interface CalendarDashboardDumbProps<T extends ICalendarItem> {
  appointments: AppointmentEntity[];
  items: T[];
}

export const CalendarDashboardDumb = ({
	appointments = [],
	items = [],
}: CalendarDashboardDumbProps<ICalendarItem>) => {
	const itemsToAppointments: Record<string | number, AppointmentEntity[]> = {};
	const { boxHeight, boxWidth } = useCalendarContext();
	for (const item of items) {
		itemsToAppointments[item.id] = appointments.filter(
			appointment => appointment.employee?.id === item.id
		);
	}
	return (
		<div className={style.dashboardCalendar}>
			<HourColumn
				startHour={START_HOUR}
				endHour={END_HOUR}
				hourHeight={boxHeight}
				hourWidth={boxWidth}
			/>
			{items.map(item => {
				return (
					<div key={item.id}>
						<div>{item.toString()}</div>
						<CalendarColumn
							appointments={itemsToAppointments[item.id] || []}
							item={item}
						/>
					</div>
				);
			})}
		</div>
	);
};
