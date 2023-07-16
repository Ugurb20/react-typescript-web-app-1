import React from 'react'
import { Story, Meta } from '@storybook/react';
import { SearchTextFieldDumb, SearchTextFieldDumbProps } from './index.dumb';

export default {
	title: 'Components/Inputs/SearchTextFieldDumb',
	component: SearchTextFieldDumb,
} as Meta;

const Template: Story<SearchTextFieldDumbProps> = (args) => <SearchTextFieldDumb {...args} />;
export const Default = Template.bind({});
Default.args = {
	label: 'Search',
	value: '',
	onChanged: (value: string) => {
		console.log(value)
	}
}

export const Stateful: Story<SearchTextFieldDumbProps> = (args) => {
	const [value, setValue] = React.useState('')
	return <SearchTextFieldDumb {...args} value={value} onChanged={setValue} />
}
Stateful.args = {
	label: 'Search',
	onChanged: (value: string) => {
		console.log(value)
	}
}

export const InitialValue: Story<SearchTextFieldDumbProps> = (args) => {
	const [value, setValue] = React.useState('Hello')
	return <SearchTextFieldDumb {...args} value={value} onChanged={setValue} />
}
InitialValue.args = {
	label: 'Search',
	onChanged: (value: string) => {
		console.log(value)
	}
}
