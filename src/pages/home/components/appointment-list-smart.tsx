import React from 'react';
import useCalendarContext from '@domain/hooks/calendar/use-calendar-context';
import { AppointmentList } from '@components/calendar/appointment-list';

export const AppointmentListSmart = () => {
	const { appointments } = useCalendarContext();

	return <AppointmentList appointments={appointments} />;
};
