import style from '@pages/home/index.module.scss';
import { BranchSelect } from '@pages/home/components/branch-select';
import React from 'react';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentListSmart } from '@pages/home/components/appointment-list-smart';
import { CalendarDashboard } from '@components/calendar/dashboard';
import { HomeCalendarHeaderDumb } from '@pages/home/components/calendar-header/index.dumb';
import { useHomePageContext } from '@pages/home/context';
import { SingleCalendarDumb } from '@components/calendar/calendar/index.dumb';

export interface HomeDashboardProps {
  appointments: AppointmentEntity[];
}

export const HomeDashboard = () => {
	const { setDate, date } = useHomePageContext();

	return (
		<>
			<div className={style.dashboardLeft}>
				<BranchSelect />
				<div className={style.dashboardCalendar}>
					<SingleCalendarDumb date={date} onChange={setDate} />
				</div>
				<div>
					<AppointmentListSmart />
				</div>
			</div>
			<div className={style.dashboardRight}>
				<HomeCalendarHeaderDumb
					date={date}
					setDate={setDate as (date: Date) => {}}
				/>
				<CalendarDashboard />
			</div>
		</>
	);
};
