import React from 'react';
import { useDrop } from 'react-dnd';
import { APPOINTMENT } from '@domain/types/dnd';
import { CalendarColumnDumb } from '@components/calendar/column/index.dumb';
import useCalendarContext from '@domain/hooks/calendar/use-calendar-context';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { ICalendarItem } from '@domain/interfaces/calendar-item';
import { END_HOUR, START_HOUR } from '@common/app.constants';
import { EmployeeEntityImpl } from '@domain/types/classes/employee';
import { LayoutAlgorithm } from '@services/layout-algorithm';
import { useInjection } from 'inversify-react';
import style from './index.module.scss';

export interface CalendarColumnProps<T extends ICalendarItem> {
  startHour?: number;
  endHour?: number;
  boxWidth?: string;
  boxHeight?: string;
  appointments: AppointmentEntity[];
  item: T;
}

export const CalendarColumn = ({
	appointments = [],
	item,
}: CalendarColumnProps<ICalendarItem>) => {
	const { boxHeight, boxWidth, handleDragEnd } = useCalendarContext();
	const layoutAlgorithm = useInjection<LayoutAlgorithm>(LayoutAlgorithm);
	const ref = React.useRef<HTMLDivElement>(null);

	const [, drop] = useDrop({
		accept: APPOINTMENT,
		drop: (appointment: AppointmentEntity, monitor) => {
			const { y } = monitor.getClientOffset() || {};
			const { top = 0 } = ref.current?.getBoundingClientRect() || {};

			if (!y) return;
			const { employee } = appointment;
			const { start, end } = appointment;
			// Get scroll position
			const scrollY = window.scrollY;

			// Calculate absolute position
			const absoluteY = y + scrollY - top;

			// 12px to 12 : number
			const boxHeightNumber = Number.parseInt(boxHeight.replace('px', ''));
			const startDate = new Date(start);
			const startOfDay = new Date(start).setHours(START_HOUR, 0, 0, 0);

			const endDate = new Date(end);
			const duration = endDate.getTime() - startDate.getTime();

			const newStart = new Date(
				startOfDay + (absoluteY / boxHeightNumber) * 60 * 60 * 1000
			);
			const newEnd = new Date(newStart.getTime() + duration);

			const target = Object.assign({}, appointment, {
				start: newStart.toString(),
				end: newEnd.toString(),
				employee: item,
			});
			handleDragEnd(
				appointment,
				target,
				employee ? new EmployeeEntityImpl(employee) : null,
				item
			);
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	drop(ref);
	const layouts = layoutAlgorithm.layoutAppointments(appointments);
	return (
		<div
			ref={ref}
			className={style.calendarColumn}
			data-testid={'calendar-column'}
		>
			<CalendarColumnDumb
				startHour={START_HOUR}
				endHour={END_HOUR}
				appointments={layouts}
				boxWidth={boxWidth}
				boxHeight={boxHeight}
			/>
		</div>
	);
};

export default CalendarColumn;
