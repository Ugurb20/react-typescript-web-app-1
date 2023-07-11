import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AdminPage from '.';

export default {
	title: 'Pages/Admin',
	component: AdminPage,
} as Meta;

type Story = StoryObj<typeof AdminPage>;

export const Primary: Story = {
	args: {},
};
