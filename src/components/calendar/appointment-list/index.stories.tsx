// eslint-disable
// @ts-nocheck
import React from 'react';
import { AppointmentList, AppointmentListProps } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { AppWrapper } from '@components/utils/app-wrapper';
import {
  AppointmentListDumb,
  AppointmentListDumbProps,
} from '@components/calendar/appointment-list/index.dumb';

const generator = new AppointmentMockGenerator();

export default {
  title: 'Components/Calendar/AppointmentList',
  component: AppointmentListDumb,
};

type Story = StoryObj<AppointmentListProps>;

export const Template = (args: AppointmentListDumbProps) => (
  <AppWrapper>
    <AppointmentListDumb {...args} />
  </AppWrapper>
);

export const Default: Story = Template.bind({});
Default.args = {
  pendingAppointments: generator.generateMany(50),
  waitlistAppointments: generator.generateMany(50),
  cancelledAppointments: generator.generateMany(50),
};

export const TooManyItems: Story = Template.bind({});
TooManyItems.args = {
  pendingAppointments: generator.generateMany(250),
  waitlistAppointments: generator.generateMany(250),
  cancelledAppointments: generator.generateMany(250),
};
