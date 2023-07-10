/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { ICalendarItem } from '@domain/interfaces/calendar-item';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { DEFAULT_BOX_HEIGHT, DEFAULT_BOX_WIDTH } from '@common/app.constants';

// calendar-provider.tsx
export const CalendarContext = React.createContext<
  CalendarContextProps<ICalendarItem>
>({
	boxWidth: `${DEFAULT_BOX_WIDTH}px`,
	boxHeight: `${DEFAULT_BOX_HEIGHT}px`,
	appointments: [],
	dragAccept: () => true,
	items: [],
	onDragFinished: () => {},
});

export interface CalendarContextProps<T extends ICalendarItem> {
  boxWidth: string;
  boxHeight: string;
  appointments: AppointmentEntity[];
  dragAccept: (
    source: AppointmentEntity,
    target: AppointmentEntity,
    sourceItem: T | null,
    targetItem: T
  ) => boolean;
  onDragFinished: (
    source: AppointmentEntity,
    target: AppointmentEntity,
    sourceItem: T | null,
    targetItem: T
  ) => void;
  items: T[];
  setItems?: React.Dispatch<React.SetStateAction<T[]>>;
  setAppointments?: React.Dispatch<React.SetStateAction<AppointmentEntity[]>>;
}

export interface CalendarProviderProps<T extends ICalendarItem>
  extends Partial<CalendarContextProps<T>> {
  children: React.ReactNode;
}

export const CalendarContextProvider = ({
	children,
	boxWidth = `${DEFAULT_BOX_WIDTH}px`,
	boxHeight = `${DEFAULT_BOX_HEIGHT}px`,
	dragAccept,
	onDragFinished,
	items = [],
	appointments = [],
}: CalendarProviderProps<any>) => {
	const [appointmentsState, setAppointmentsState] =
    React.useState<AppointmentEntity[]>(appointments);
	const [itemsState, setItemsState] = React.useState<ICalendarItem[]>(items);

	const calendarContext = {
		boxWidth,
		boxHeight,
		dragAccept,
		onDragFinished,
		items: itemsState,
		setItems: setItemsState,
		appointments: appointmentsState,
		setAppointments: setAppointmentsState,
	} as CalendarContextProps<any>;

	return (
		<CalendarContext.Provider
			value={calendarContext as CalendarContextProps<any>}
		>
			{children}
		</CalendarContext.Provider>
	);
};
