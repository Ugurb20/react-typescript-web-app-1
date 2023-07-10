import React, { useEffect } from 'react';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { useInjection } from 'inversify-react';
import { AppointmentListService } from '@components/calendar/appointment-list/index.service';
import { AppointmentListDumb } from '@components/calendar/appointment-list/index.dumb';

export interface AppointmentListProps {}

export const AppointmentList: React.FC<AppointmentListProps> = ({}) => {
	const [pendingAppointments, setPendingAppointments] = React.useState<
    AppointmentEntity[]
  >([]);
	const [waitlistAppointments, setWaitlistAppointments] = React.useState<
    AppointmentEntity[]
  >([]);
	const [cancelledAppointments, setCancelledAppointments] = React.useState<
    AppointmentEntity[]
  >([]);

	const appointmentListService = useInjection(AppointmentListService);

	useEffect(() => {
		appointmentListService.getPendingAppointments().then(appointments => {
			setPendingAppointments(appointments);
		});
		appointmentListService.getWaitlistAppointments().then(appointments => {
			setWaitlistAppointments(appointments);
		});
		appointmentListService.getCancelledAppointments().then(appointments => {
			setCancelledAppointments(appointments);
		});
	}, []);

	return (
		<AppointmentListDumb
			pendingAppointments={pendingAppointments}
			waitlistAppointments={waitlistAppointments}
			cancelledAppointments={cancelledAppointments}
		/>
	);
};
