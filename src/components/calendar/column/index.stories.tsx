import React from 'react';
import { CalendarColumnDumb } from '@components/calendar/column/index.dumb';
import { Meta } from '@storybook/react';
import { END_HOUR, START_HOUR } from '@common/app.constants';

export default {
	title: 'Components/Calendar/Column',
	component: CalendarColumnDumb,
} as Meta;

export const Default = () => (
	<CalendarColumnDumb
		startHour={START_HOUR}
		endHour={END_HOUR}
		appointments={[]}
		boxWidth={'240px'}
		boxHeight={'120px'}
	/>
);
