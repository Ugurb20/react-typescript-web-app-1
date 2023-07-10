// @ts-nocheck
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import {
  HourColumn,
  HourColumnDumbProps,
} from '@components/calendar/hour-column/index';

export default {
  title: 'Components/Calendar/HourColumn',
  component: HourColumn,
} as Meta;

type Story = StoryObj<HourColumnDumbProps>;

const Template = (args: HourColumnDumbProps) => <HourColumn {...args} />;

export const Default: Story = Template.bind({});
Default.args = {
  startHour: 8,
  endHour: 18,
  hourHeight: 60,
  hourWidth: 100,
};
