import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ClientPage from '.';

export default {
	title: 'Pages/Client',
	component: ClientPage,
} as Meta;

type Story = StoryObj<typeof ClientPage>;

export const Primary: Story = {
	args: {},
};
