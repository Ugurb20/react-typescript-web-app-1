import React from 'react';
import { IconButton, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import style from './index.module.scss';

export interface DateNavigationDumbProps {
  currentDate?: Date;
  onDateChange?: (newDate: Date) => void;
}

export const DateNavigationDumb: React.FC<DateNavigationDumbProps> = ({
	onDateChange,
	currentDate = new Date(),
}) => {
	const handleBackClick = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(newDate.getDate() - 1);
		onDateChange && onDateChange(newDate);
	};

	const handleForwardClick = () => {
		const newDate = new Date(currentDate);
		newDate.setDate(newDate.getDate() + 1);
		onDateChange && onDateChange(newDate);
	};

	const weekday = currentDate
		.toLocaleDateString(undefined, { weekday: 'short' })
		.slice(0, 3);
	const dateStr = `${weekday}, ${currentDate.getDate()}/${
		currentDate.getMonth() + 1
	}/${currentDate.getFullYear()}`;

	return (
		<div className={style.dateNavigation}>
			<IconButton onClick={handleBackClick}>
				<ArrowBackIosIcon />
			</IconButton>
			<Typography>{dateStr}</Typography>
			<IconButton onClick={handleForwardClick}>
				<ArrowForwardIosIcon />
			</IconButton>
		</div>
	);
};
