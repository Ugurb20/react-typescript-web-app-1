import React, { createContext, useContext, useState } from 'react';
import { AppointmentEntity } from '@domain/types/entities/appointment';

export interface TicketInformationContextProps {
  appointment: AppointmentEntity | null;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setAppointment: (appointment: AppointmentEntity) => void;
}

const TicketInformationContext = createContext({
	appointment: null,
	isOpen: false,
} as TicketInformationContextProps);

export interface TicketInformationProviderProps {
  children?: React.ReactNode;
}

export const TicketInformationProvider: React.FC<
  TicketInformationProviderProps
> = ({ children }) => {
	const [appointment, setAppointment] = useState<AppointmentEntity | null>(
		null
	);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<TicketInformationContext.Provider
			value={{
				// @ts-ignore
				appointment,
				setAppointment,
				setIsOpen,
				isOpen,
			}}
		>
			{children}
		</TicketInformationContext.Provider>
	);
};

export const useTicketInformation = () => {
	const context = useContext(TicketInformationContext);

	if (context === undefined) {
		throw new Error('useDrawer must be used within a DrawerProvider');
	}

	return context;
};
