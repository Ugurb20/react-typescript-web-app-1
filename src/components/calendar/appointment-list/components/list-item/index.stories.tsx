import React from 'react';
import { AppointmentListItem, AppointmentListItemProps } from './index';
import { Meta, StoryObj } from '@storybook/react';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';

const generator = new AppointmentMockGenerator();

export default {
  title: 'Components/Calendar/AppointmentList/ListItem',
  component: AppointmentListItem,
} as Meta;

export const ListItemNormal = () => {
  const normalAppt = generator.generateOne();
  normalAppt.dog.special_handling = false;
  return <AppointmentListItem appointment={normalAppt} />;
};

export const ListItemSpecialHandling = () => {
  const appt = generator.generateOne();
  appt.dog.special_handling = true;
  return <AppointmentListItem appointment={appt} />;
};
