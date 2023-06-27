import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '.';

export default {
	title: 'Pages/Home',
	component: HomePage,
} as Meta;

type Story = StoryObj<typeof HomePage>;

export const Primary: Story = {
	args: {},
};
