// @ts-nocheck
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { SelectableButtonGroup, SelectableButtonGroupProps } from './index';

export default {
  title: 'Components/Inputs/SelectableButtonGroup',
  component: SelectableButtonGroup,
};

type Story = StoryObj<SelectableButtonGroupProps>;

export const Template = (args: SelectableButtonGroupProps) => (
  <SelectableButtonGroup {...args} />
);

export const Default: Story = Template.bind({});
Default.args = {
  buttonNames: ['Day', 'Week'],
  onSelect: (buttonName: string) => console.log(buttonName),
};

export const TooManyButtons: Story = Template.bind({});
TooManyButtons.args = {
  buttonNames: [
    'Day',
    'Week',
    'Month',
    'Year',
    'Decade',
    'Century',
    'Millenium',
  ],
};
