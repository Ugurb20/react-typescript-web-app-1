// @ts-nocheck
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { HomeCalendarHeaderDumb } from './index.dumb';

export default {
  title: 'Pages/Home/CalendarHeader',
  component: HomeCalendarHeaderDumb,
};

type Story = StoryObj<{}>;

export const Template = (args: {}) => <HomeCalendarHeaderDumb {...args} />;
