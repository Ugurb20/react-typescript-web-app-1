// @ts-nocheck
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { HomePageDumb, HomePageDumbProps } from './index.dumb';
import { StorybookAppTemplate } from '@components/common/app-template';
import { CalendarContextProvider } from '@domain/hooks/calendar/calendar-provider';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';
import { HomePageContextProvider } from '@pages/home/context';
import { EmployeeEntityImpl } from '@domain/types/classes/employee';
import { END_HOUR, START_HOUR } from '@common/app.constants';

export default {
  title: 'Pages/Home',
  component: HomePageDumb,
};

type Story = StoryObj<HomePageDumbProps>;

const employeeMockGenerator = new EmployeeMockGenerator();
const appointmentMockGenerator = new AppointmentMockGenerator();
const employees = employeeMockGenerator.generateMany(20).map(employee => {
  return new EmployeeEntityImpl(employee);
});
const appointments = appointmentMockGenerator.generateMany(100, {
  date: new Date(),
  employees,
});

export const Template = (args: HomePageDumbProps) => {
  const { appointments, items } = args;

  const filteredAppointments = appointments.filter(appointment => {
    const startHour = new Date(appointment.start).getHours();
    return startHour >= START_HOUR && startHour <= END_HOUR;
  });
  return (
    <StorybookAppTemplate>
      <HomePageContextProvider>
        <CalendarContextProvider
          items={employees}
          appointments={filteredAppointments}
          boxWidth={'256px'}
          boxHeight={'48px'}
          dragAccept={() => true}
          onDragFinished={() => {}}
        >
          <HomePageDumb {...args} />
        </CalendarContextProvider>
      </HomePageContextProvider>
    </StorybookAppTemplate>
  );
};

export const Default: Story = Template.bind({} as HomePageDumbProps);
Default.args = {
  appointments,
  items: employees,
};
