import React from 'react';
import { AppointmentCardDumb } from './index.dumb';
import { APPOINTMENT } from '@domain/types/dnd';
import { useDrag } from 'react-dnd';
import useCalendarContext from '@domain/hooks/calendar/use-calendar-context';
import style from './index.module.scss';
import { START_HOUR } from '@common/app.constants';
import { AppointmentLayout } from '@domain/interfaces/appointment-layout';
import { useTicketInformation } from '@components/drawers/ticket-information/index.context';

export interface AppointmentCardProps {
  layout: AppointmentLayout;
}

export const AppointmentCardWrapper = ({ layout }: AppointmentCardProps) => {
	const [isDragging, setIsDragging] = React.useState(false);
	const { boxHeight, boxWidth } = useCalendarContext();

	const { setAppointment, setIsOpen } = useTicketInformation();

	const { appointment, left, right } = layout;
	const start = new Date(appointment.start);
	const end = new Date(appointment.end);
	const duration = (end.getTime() - start.getTime()) / 1000 / 60 / 60;

	const boxWidthNumber = Number.parseInt(boxWidth.replace('px', ''), 10);
	const boxHeightNumber = Number.parseInt(boxHeight.replace('px', ''), 10);
	const top = (start.getHours() - START_HOUR) * boxHeightNumber;
	const cardHeight = (duration * boxHeightNumber).toString() + 'px';
	const cardWidth = (right - left) * boxWidthNumber + 'px';
	const cardLeft = left * boxWidthNumber + 'px';
	const [, drag] = useDrag({
		type: APPOINTMENT,
		item: appointment,
		end: (item, monitor) => {
			const dropResult = monitor.getDropResult();
			if (item && dropResult) {
				// handle end of drag and drop
			}
		},
		collect: monitor => {
			setIsDragging(monitor.isDragging());
			return {
				isDragging: monitor.isDragging(),
			};
		},
	});

	const handleDoubleClick = () => {
		setAppointment(appointment);
		setIsOpen(true);
	};

	return isDragging ? null : (
		<div
			style={{
				position: 'absolute',
				top: `${top}px`,
				left: cardLeft,
				width: cardWidth,
			}}
			onDoubleClick={handleDoubleClick}
			className={style.appointmentCardWrapper}
			ref={drag}
		>
			<AppointmentCardDumb
				appointment={appointment}
				sizingStrategy={{
					width: cardWidth,
					height: cardHeight,
					zIndex: 1,
				}}
			/>
		</div>
	);
};
