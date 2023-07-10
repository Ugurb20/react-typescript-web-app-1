import { DndProvider } from '@components/providers/dnd-provider';
import { CalendarDashboardDumb } from '@components/calendar/dashboard/index.dumb';
import React from 'react';
import useCalendarContext from '@domain/hooks/calendar/use-calendar-context';

export const CalendarDashboard: React.FC = () => {
	const { appointments, items } = useCalendarContext();

	return (
		<DndProvider>
			<CalendarDashboardDumb appointments={appointments} items={items} />
		</DndProvider>
	);
};
