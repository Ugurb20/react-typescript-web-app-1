/* eslint-disable sonarjs/cognitive-complexity */
import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import moment from 'moment';
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

export interface SingleCalendarProps {
  date?: Date;
  onChange?: (date: Date) => void;
  mapDateToClassName?: (date: Date) => string;
  highlight?: boolean;
}

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

const ControlledCalendar: React.FC<SingleCalendarProps> = ({
	onChange,
	date = new Date(),
	mapDateToClassName = () => '',
	highlight = true,
}) => {
	const [dateRange, setDateRange] = useState<Array<Date>>([]);
	const currentYear = date.getUTCFullYear();
	const currentMonth = date.getUTCMonth() + 1;
	const [activeDay, setActiveDay] = useState<number>(date.getUTCDate());

	function getStartDate() {
		const firstDayOfMonth = new Date(
			`${currentYear}-${
				currentMonth < 10 ? '0' + String(currentMonth) : String(currentMonth)
			}-01`
		);
		const isSunday = firstDayOfMonth.getDay() === 0;
		return isSunday
			? moment
				.utc(firstDayOfMonth)
				.subtract(1, 'day')
				.startOf('week')
				.add(1, 'day')
			: moment
				.utc(firstDayOfMonth)
				.startOf('month')
				.startOf('week')
				.add(1, 'day');
	}

	function getEndDate() {
		const endOfMonth = moment
			.utc(
				`${currentYear}-${
					currentMonth < 10 ? '0' + String(currentMonth) : String(currentMonth)
				}-01`
			)
			.endOf('month');
		const isSunday = endOfMonth.day() === 0;
		return isSunday ? endOfMonth : endOfMonth.endOf('week').add(1, 'day');
	}

	function setDates() {
		const startDate = getStartDate();
		const endDate = getEndDate();

		const dateRange = [];
		let currentDate = startDate;

		while (currentDate.isSameOrBefore(endDate)) {
			dateRange.push(currentDate.toDate());
			currentDate = currentDate.clone().add(1, 'day');
		}
		setDateRange(dateRange);
	}

	useEffect(() => {
		setDates();
	}, [currentMonth, currentYear, date]);

	const incrementMonth = () => {
		let newMonth, newYear;
		if (currentMonth === 12) {
			newYear = currentYear + 1;
			newMonth = 1;
		} else {
			newYear = currentYear;
			newMonth = currentMonth + 1;
		}

		const newMonthDays = new Date(newYear, newMonth, 0).getDate();
		if (onChange !== undefined) {
			if (activeDay > newMonthDays) {
				onChange(new Date(newYear, newMonth, newMonthDays));
				setActiveDay(newMonthDays);
			} else {
				onChange(new Date(newYear, newMonth, activeDay));
			}
		}
	};

	const decrementMonth = () => {
		let newMonth, newYear;
		if (currentMonth === 1) {
			newYear = currentYear - 1;
			newMonth = 12;
		} else {
			newYear = currentYear;
			newMonth = currentMonth - 1;
		}

		const newMonthDays = new Date(newYear, newMonth, 0).getDate();
		if (onChange !== undefined) {
			if (activeDay > newMonthDays) {
				onChange(new Date(newYear, newMonth, newMonthDays));
				setActiveDay(newMonthDays);
			} else {
				onChange(new Date(newYear, newMonth, activeDay));
			}
		}
	};

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
				? { background: 'rgba(0,0,0,1)', color: 'white' }
				: {
					background: 'rgba(0,0,0,0)',
					color: 'black',
				};
			const onDateClick = () => {
				if (!isActiveMonth) {
					setActiveDay(date.getUTCDate());
				}
				if (!isActiveDate) {
					setActiveDay(date.getUTCDate());
					if (onChange !== undefined) {
						onChange(
							new Date(currentYear, currentMonth - 1, date.getUTCDate())
						);
					}
				}
			};

			return (
				<div
					key={date.toISOString()}
					className={dateBoxClass + spanClassName}
					onClick={onDateClick}
					data-testid={isActiveDate ? 'active-date' : 'date'}
					style={dateStyle}
				>
					<span className={spanClassName}>{date.getUTCDate()}</span>
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
					onClick={decrementMonth}
				/>
				<div>
					<h1 data-testid="current-month">{monthNames[currentMonth - 1]}</h1>
					<h3 data-testid={'current-year'}>{currentYear}</h3>
				</div>
				<MdOutlineKeyboardArrowRight
					data-testid="arrow-right"
					size={'30px'}
					onClick={incrementMonth}
				/>
			</div>
			<div className={style.datesWrapper}>
				{renderDaysOfWeek()}
				{renderDates()}
			</div>
		</div>
	);
};

export default ControlledCalendar;
