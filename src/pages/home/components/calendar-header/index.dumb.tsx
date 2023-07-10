import React from 'react';
import style from './index.module.scss';
import { DateNavigation } from '@components/inputs/date-navigation';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { EmployeeSelect } from '@pages/home/components/employee-select';
import { DateNavigationDumb } from '@components/inputs/date-navigation/index.dumb';

export interface HomeCalendarHeaderDumbProps {
  date: Date;
  setDate: (date: Date) => void;
}

export const HomeCalendarHeaderDumb: React.FC<HomeCalendarHeaderDumbProps> = ({
	date,
	setDate,
}) => {
	return (
		<div className={style.calendarHeader}>
			<div className={style.calendarHeaderLeft}>
				<EmployeeSelect />
			</div>
			<div className={style.calendarHeaderCenter}>
				<DateNavigationDumb currentDate={date} onDateChange={setDate} />
			</div>
			<div className={style.calendarHeaderRight}>
				<Fab size={'small'}>
					<AddIcon />
				</Fab>
			</div>
		</div>
	);
};
