import { HomePageService } from '@pages/home/index.service';
import { useInjection } from 'inversify-react';
import { useEffect } from 'react';
import { useHomePageContext } from '@pages/home/context';
import useCalendarContext from '@domain/hooks/calendar/use-calendar-context';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { EmployeeEntityImpl } from '@domain/types/classes/employee';

export const HomePageSync = () => {
	const homePageService = useInjection<HomePageService>(HomePageService);
	const { employee, branch, date } = useHomePageContext();
	const { setAppointments, setItems } = useCalendarContext();

	useEffect(() => {
		if (!employee && branch && date) {
			homePageService
				.getDailyAppointments(branch.id, date)
				.then(appointments => {
					if (!appointments || !setAppointments) return;
					setAppointments(appointments as AppointmentEntity[]);
				});

			homePageService.getBranchEmployees(branch.id, date).then(employees => {
				if (!employees || !setItems) return;
				setItems(
					employees.map(employee => EmployeeEntityImpl.fromJSON(employee))
				);
			});
		}
	}, [employee, branch, date]);

	return null;
};
