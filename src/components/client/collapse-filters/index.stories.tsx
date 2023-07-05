import type { Meta, StoryObj } from '@storybook/react';
import CollapseFilters from '.';
import '../../../../src/index.css';

export default {
	title: 'Components/Client/CollapseFilters',
	component: CollapseFilters,
} as Meta;

type Story = StoryObj<typeof CollapseFilters>;

export const Primary: Story = {
	args: {
		min: 0,
		max: 100,
		step: 10,
		suffix: '$',
		filterName: 'Total Paid',
	},
};
