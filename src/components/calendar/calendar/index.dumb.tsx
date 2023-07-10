import React, { useEffect } from 'react';
import style from './index.module.scss';
import moment from 'moment';
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export interface SingleCalendarDumbProps {
  date?: Date;
  onChange?: (date: Date) => void;
  mapDateToClassName?: (date: Date) => string;
  highlight?: boolean;
}

export const SingleCalendarDumb: React.FC<SingleCalendarDumbProps> = ({
	onChange,
	date = new Date(),
	mapDateToClassName = () => '',
	highlight = true,
}) => {
	const currentMonth = date.getMonth() + 1;
	const currentYear = date.getFullYear();
	const activeDay = date.getDate();

	function getDateRange() {
		const startDate = moment.utc(date).startOf('month').startOf('week');
		const endDate = moment.utc(date).endOf('month').endOf('week');

		const dateRange = [];
		let currentDate = startDate;

		while (currentDate.isSameOrBefore(endDate)) {
			dateRange.push(currentDate.toDate());
			currentDate = currentDate.clone().add(1, 'day');
		}

		return dateRange;
	}

	const dateRange = getDateRange();

	const renderDaysOfWeek = () => {
		const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
		return days.map(day => (
			<span key={day} className={style.dateBox + style.dateBoxday}>
				{day}
			</span>
		));
	};

	const renderDates = () => {
		return dateRange.map(date => {
			const spanClassName = ' ' + mapDateToClassName(date);
			const isActiveMonth = date.getUTCMonth() + 1 === currentMonth;
			const isActiveDate =
        date.getUTCDate() === activeDay && isActiveMonth && highlight;
			const dateBoxClass = isActiveMonth
				? style.dateBox
				: style.dateBox + ' ' + style.dateBoxDeactive;
			const dateStyle = isActiveDate
				? {
					background: 'rgba(0,0,0,1)',
					color: 'white',
				}
				: {
					background: 'rgba(0,0,0,0)',
					color: 'black',
				};
			const newDate = new Date(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate()
			);

			return (
				<div
					key={date.toISOString()}
					className={dateBoxClass + spanClassName}
					data-testid={isActiveDate ? 'active-date' : 'date'}
					style={dateStyle}
					onClick={() => onChange && onChange(newDate)}
				>
					<span className={spanClassName}>{date.getDate()}</span>
				</div>
			);
		});
	};

	return (
		<div data-testid="calendar-instance">
			<div className={style.calendarControl}>
				<MdOutlineKeyboardArrowLeft
					data-testid="arrow-left"
					size={'30px'}
					onClick={() =>
						onChange &&
            onChange(new Date(currentYear, currentMonth - 2, activeDay))
					}
				/>
				<div>
					<h3 data-testid="current-month">{monthNames[currentMonth - 1]}</h3>
					<h5 data-testid={'current-year'}>{currentYear}</h5>
				</div>
				<MdOutlineKeyboardArrowRight
					data-testid="arrow-right"
					size={'30px'}
					onClick={() =>
						onChange && onChange(new Date(currentYear, currentMonth, activeDay))
					}
				/>
			</div>
			<div className={style.datesWrapper}>
				{renderDaysOfWeek()}
				{renderDates()}
			</div>
		</div>
	);
};
