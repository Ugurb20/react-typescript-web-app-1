import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { CalendarDashboardDumbProps } from '@components/calendar/dashboard/index.dumb';
import { EmployeeEntityImpl } from '@domain/types/classes/employee';
import { CalendarContextProvider } from '@domain/hooks/calendar/calendar-provider';
import { END_HOUR, START_HOUR } from '@common/app.constants';
import { CalendarDashboard } from '@components/calendar/dashboard/index';
import { StorybookAppTemplate } from '@components/common/app-template';

type EmployeeCalendarType = CalendarDashboardDumbProps<EmployeeEntityImpl>;
type Story = StoryObj<EmployeeCalendarType>;

const Template = (args: EmployeeCalendarType) => {
  const { appointments, items } = args;

  const filteredAppointments = appointments.filter(appointment => {
    const startHour = new Date(appointment.start).getHours();
    return startHour >= START_HOUR && startHour <= END_HOUR;
  });
  return (
    <StorybookAppTemplate>
      <CalendarContextProvider
        appointments={filteredAppointments}
        boxWidth={'240px'}
        boxHeight={'32px'}
        items={items}
        dragAccept={() => {
          return true;
        }}
        onDragFinished={(source, target, sourceItem, targetItem) => {}}
      >
        <CalendarDashboard />
      </CalendarContextProvider>
    </StorybookAppTemplate>
  );
};

export default {
  title: 'Components/Calendar/Dashboard',
  component: Template,
};
export const Empty: Story = {
  args: {
    appointments: [],
    items: [],
  },
};

const appointmentMockGenerator = new AppointmentMockGenerator();
const employeeMockGenerator = new EmployeeMockGenerator();

const employees = employeeMockGenerator.generateMany(20).map(employee => {
  return new EmployeeEntityImpl(employee);
});
const appointments = appointmentMockGenerator.generateMany(100, {
  date: new Date(),
  employees,
});

export const WithAppointments: Story = {
  args: {
    appointments,
    items: employees,
  },
};
