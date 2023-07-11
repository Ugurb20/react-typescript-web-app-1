import { ICalendarItem } from '@domain/interfaces/calendar-item';
import { useContext } from 'react';
import {
	CalendarContext,
	CalendarContextProps,
} from '@domain/hooks/calendar/calendar-provider';
import { AppointmentEntity } from '@domain/types/entities/appointment';

export const useCalendarContext = <T extends ICalendarItem>() => {
	const calendarContext =
    useContext<CalendarContextProps<ICalendarItem>>(CalendarContext);

	const {
		items,
		appointments,
		setAppointments,
		dragAccept,
		boxHeight,
		boxWidth,
		onDragFinished,
		setItems,
	} = calendarContext;

	const handleDragEnd = (
		source: AppointmentEntity,
		target: AppointmentEntity,
		sourceIndex: T | null,
		targetIndex: T
	) => {
		if (!dragAccept) {
			const newAppointments = appointments.map(appointment => {
				return appointment.id === target.id ? target : appointment;
			});

			setAppointments && setAppointments(newAppointments);
		} else if (dragAccept(source, target, sourceIndex, targetIndex)) {
			onDragFinished &&
        onDragFinished(source, target, sourceIndex, targetIndex);
			const newAppointments = appointments.map(appointment => {
				return appointment.id === target.id ? target : appointment;
			});

			setAppointments && setAppointments(newAppointments);
		}
	};

	const setAppointment = (target: AppointmentEntity) => {
		const newAppointments = appointments.map(appointment => {
			return appointment.id === target.id ? target : appointment;
		});
		setAppointments && setAppointments(newAppointments);
	};

	return {
		appointments,
		items,
		handleDragEnd,
		boxWidth,
		boxHeight,
		setAppointments,
		setItems,
		setAppointment,
	};
};

export default useCalendarContext;
