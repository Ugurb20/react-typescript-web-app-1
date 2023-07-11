import React from 'react';
import { HomeCalendarHeaderDumb } from '@pages/home/components/calendar-header/index.dumb';
import { useHomePageContext } from '@pages/home/context';
export const HomeCalendarHeader = () => {
	const { date, setDate } = useHomePageContext();

	return (
		<HomeCalendarHeaderDumb
			date={date}
			setDate={setDate as (arg0: Date) => {}}
		/>
	);
};
