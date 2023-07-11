// @ts-nocheck
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { DateNavigation, DateNavigationProps } from './index';
import { AppWrapper } from '@components/utils/app-wrapper';

export default {
  title: 'Components/Inputs/DateNavigation',
  component: DateNavigation,
};

type Story = StoryObj<DateNavigationProps>;

export const Template = (args: DateNavigationProps) => (
  <AppWrapper>
    <DateNavigation {...args} />
  </AppWrapper>
);

export const Default: Story = Template.bind({});
Default.args = {
  initialDate: new Date(),
};

export const CustomDate: Story = Template.bind({});
CustomDate.args = {
  initialDate: new Date('2021-01-01'),
};
