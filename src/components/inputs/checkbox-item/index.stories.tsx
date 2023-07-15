import React from 'react';
import {CheckboxItemDumb, CheckboxItemDumbProps} from './index.dumb';
import {Meta, Story} from '@storybook/react';

export default {
	title: 'Components/Inputs/CheckboxItem',
	component: CheckboxItemDumb,
} as Meta;

const Template : Story<CheckboxItemDumbProps> = (args) => <CheckboxItemDumb {...args} />;
export const Default = Template.bind({});
Default.args = {
	checked: false,
	label: 'Checkbox Item',
}

export const Checked = Template.bind({});
Checked.args = {
	checked: true,
	label: 'Checkbox Item',
}

export const WithOnChecked = Template.bind({});
WithOnChecked.args = {
	checked: false,
	label: 'Checkbox Item',
	onChecked: (checked) => {
		console.log('checked', checked);
	}
}

const StatefulTemplate : Story<CheckboxItemDumbProps> = (args) => {
	const [checked, setChecked] = React.useState(false);
	return <CheckboxItemDumb {...args} checked={checked} onChecked={setChecked} />;
}

export const Stateful = StatefulTemplate.bind({});
Stateful.args = {
	label: 'Checkbox Item',
}
