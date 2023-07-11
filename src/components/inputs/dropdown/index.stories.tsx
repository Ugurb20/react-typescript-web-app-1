import React from 'react';
import { Meta } from '@storybook/react';
import DropdownMenu, { DropdownProps } from './index.dumb';

export default {
  title: 'Components/Inputs/Dropdown',
  component: DropdownMenu,
} as Meta;

export const Default = (args: DropdownProps) => <DropdownMenu {...args} />;
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};
