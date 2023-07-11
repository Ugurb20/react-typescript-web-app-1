import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ReportsPage from '.';

export default {
	title: 'Pages/Reports',
	component: ReportsPage,
} as Meta;

type Story = StoryObj<typeof ReportsPage>;

export const Primary: Story = {
	args: {},
};
