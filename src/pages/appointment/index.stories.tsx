import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import AppointmentPage from '.';

export default {
	title: 'Pages/Appointment',
	component: AppointmentPage,
} as Meta;

type Story = StoryObj<typeof AppointmentPage>;

export const Primary: Story = {
	args: {},
};
