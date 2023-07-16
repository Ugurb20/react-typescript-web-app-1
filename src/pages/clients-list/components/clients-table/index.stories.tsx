import {ClientsTableDumb,ClientsTableDumbProps} from '@pages/clients-list/components/clients-table/index.dumb';
import { CustomerMockGenerator } from '@test/__mocks__/types/entities/customer';
import { PAGE_SIZE } from '@common/constants';


export default {
	title: 'Pages/ClientsList/ClientsTable',
	component: ClientsTableDumb,
}

const generator = new CustomerMockGenerator();

const Template = (args: ClientsTableDumbProps) => <ClientsTableDumb {...args} />;
const clients = generator.generateMany(30);
export const Default = Template.bind({});
Default.args = {
	clients: clients.slice(0, PAGE_SIZE),
	onPageChange: () => {console.log('onPageChange')} ,
	onRowClick: () => {console.log('onRowClick')},
	onSort: () => {console.log('onSort')},
	currentPage: 0,
	totalPages: 1,
	totalItems: clients.length,
	sort: 'name',
}
