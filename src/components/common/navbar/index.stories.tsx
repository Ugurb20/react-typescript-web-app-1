import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '.';
import HomeIcon from '../icons/navbar/home-icon';
import '../../../../src/index.css';

export default {
	title: 'Components/Navbar',
	component: Navbar,
} as Meta;

type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {
	args: {},
};
