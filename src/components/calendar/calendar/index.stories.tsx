import React from 'react';

import SingleCalendar, { SingleCalendarProps } from './index';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Calendar/SingleCalendar',
  component: SingleCalendar,
} as Meta;

type Story = StoryObj<SingleCalendarProps>;

export const Calendar = () => <SingleCalendar />;

export const CalendarNotHighlighted = () => (
  <SingleCalendar highlight={false} />
);
