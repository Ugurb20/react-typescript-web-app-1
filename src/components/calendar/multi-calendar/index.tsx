import React from 'react';
import moment from 'moment';
import { useState } from 'react';
import ControlledCalendar from '@components/calendar/multi-calendar/controlled';

export interface MultiCalendarProps {
  date?: Date;
  onChange?: (date: Date) => void;
  mapDateToClassName?: (date: Date) => string;
  highlight?: boolean;
}

export const MultiCalendar = ({ date, onChange }: MultiCalendarProps) => {
	const [currentDate, setCurrentDate] = useState(date ?? new Date());
	const [oneMonthBeforeDate, setOneMonthBeforeDate] = useState(
		moment.utc(currentDate).subtract(1, 'month').toDate()
	);
	const [oneMonthAfterDate, setOneMonthAfterDate] = useState(
		moment.utc(currentDate).add(1, 'month').toDate()
	);
	const handleOnChange = (date: Date) => {
		setCurrentDate(date);
		setOneMonthBeforeDate(moment.utc(date).subtract(1, 'month').toDate());
		setOneMonthAfterDate(moment.utc(date).add(1, 'month').toDate());
		onChange && onChange(date);
	};

	const Margin = () => (
		<div
			style={{
				height: '32px',
			}}
		/>
	);

	return (
		<div>
			<div data-testid={'previous-month-calendar'}>
				<ControlledCalendar
					highlight={false}
					onChange={handleOnChange}
					date={oneMonthBeforeDate}
				/>
				<Margin />
			</div>
			<div data-testid={'current-month-calendar'}>
				<ControlledCalendar onChange={handleOnChange} date={currentDate} />
			</div>
			<Margin />

			<div data-testid={'next-month-calendar'}>
				<ControlledCalendar
					onChange={handleOnChange}
					date={oneMonthAfterDate}
					highlight={false}
				/>
			</div>
		</div>
	);
};
