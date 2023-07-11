import React, { useState } from 'react';
import { SingleCalendarDumb } from '@components/calendar/calendar/index.dumb';

export interface SingleCalendarProps {
  date?: Date;
  onChange?: (date: Date) => void;
  mapDateToClassName?: (date: Date) => string;
  highlight?: boolean;
}

const SingleCalendar: React.FC<SingleCalendarProps> = ({
	onChange,
	date = new Date(),
	mapDateToClassName = () => '',
	highlight = true,
}) => {
	const [dateState, setDateState] = useState(date);
	const handleChange = (date: Date) => {
		setDateState(date);
		onChange && onChange(date);
	};
	return (
		<SingleCalendarDumb
			date={dateState}
			onChange={handleChange}
			mapDateToClassName={mapDateToClassName}
			highlight={highlight}
		/>
	);
};

export default SingleCalendar;
