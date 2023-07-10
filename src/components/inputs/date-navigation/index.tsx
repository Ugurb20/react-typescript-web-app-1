import React, { useState } from 'react';
import { DateNavigationDumb } from '@components/inputs/date-navigation/index.dumb';

export interface DateNavigationProps {
  initialDate?: Date;
  onDateChange?: (newDate: Date) => void;
}

export const DateNavigation: React.FC<DateNavigationProps> = ({
	initialDate = new Date(),
	onDateChange,
}) => {
	const [currentDate, setCurrentDate] = useState(initialDate);

	const handleDateChange = (newDate: Date) => {
		setCurrentDate(newDate);
		onDateChange && onDateChange(newDate);
	};

	return (
		<DateNavigationDumb
			currentDate={currentDate}
			onDateChange={handleDateChange}
		/>
	);
};
