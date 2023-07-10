import React from 'react';
import { AppWrapper } from '@components/utils/app-wrapper';
import { HomePageContextProvider } from '@pages/home/context';
import { CalendarContextProvider } from '@domain/hooks/calendar/calendar-provider';
import { HomePageSync } from '@pages/home/components/home-page-sync';
import { HomePageDumb } from '@pages/home/index.dumb';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { TicketInformation } from '@components/drawers/ticket-information';

export const HomePageRoot = () => {
	const today = new Date();

	const dragAccept = (source: AppointmentEntity) => {
		return (
			source.status === 'Pending' ||
      source.status === 'Approved' ||
      source.status === 'Rescheduling'
		);
	};

	return (
		<AppWrapper>
			<CalendarContextProvider dragAccept={dragAccept}>
				<HomePageContextProvider date={today}>
					<HomePageSync />
					<HomePageDumb />
					<TicketInformation />
				</HomePageContextProvider>
			</CalendarContextProvider>
		</AppWrapper>
	);
};

export default HomePageRoot;
