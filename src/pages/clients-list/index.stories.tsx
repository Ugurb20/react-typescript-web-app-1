// Path: src/pages/clients-list/index.stories.tsx

import React from 'react';
import { ClientsListPageDumb,ClientsListPageDumbProps } from '@pages/clients-list/index.dumb';
import { CustomerMockGenerator } from '@test/__mocks__/types/entities/customer';
import { PAGE_SIZE } from '@common/constants';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter, Route } from 'react-router-dom';

export default {
	title: 'Pages/ClientsList',
	component: ClientsListPageDumb,
} as Meta;
const generator = new CustomerMockGenerator();

const generate = () => generator.generateMany(PAGE_SIZE);

const Template: Story<ClientsListPageDumbProps> = (args) => <BrowserRouter > <ClientsListPageDumb {...args} /></BrowserRouter>;
export const Default = Template.bind({});
Default.args = {
	clientName: '',
	sort: 'name',
	currentPage: 0,
	clients: [],
	onClientNameChange: () => {console.log('onClientNameChange')},
	onSortChange: () => {console.log('onSortChange')},
	onPageChange: () => {console.log('onPageChange')},
}

export const WithClients = Template.bind({});

WithClients.args = {
	clientName: '',
	sort: 'name',
	currentPage: 0,
	clients: generate(),
}
