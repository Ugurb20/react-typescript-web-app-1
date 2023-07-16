import React from 'react';
import { Meta } from '@storybook/react';

import { MultiCalendar } from './index';
export default {
	title: 'Components/Calendar/MultiCalendar',
	component: MultiCalendar,
};

export const Default = () => {
	return <MultiCalendar onChange={console.log} />;
};
