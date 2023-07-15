/*
import { CustomerEntity } from '@domain/types/entities/customer';
import {
	TableRow,
	TableCell,
	TableContainer,
	Table,
	TableHead,
	MenuItem,
	Menu,
	TableBody,
	IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import styles from './index.module.scss';

export interface ClientsTableDumbProps {
	clients: CustomerEntity[];
	onPageChange: (page: number) => void;
	onRowClick: (client: CustomerEntity) => void;
	onSort: (sort: string) => void;
	currentPage: number;
	totalPages: number;
	totalItems: number;
	sort: string;
}

export const ClientsTableDumb: React.FC<ClientsTableDumbProps> = ({
	clients,
	onPageChange,
	onRowClick,
	onSort,
}) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: ) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleGoToClientPage = (client: CustomerEntity) =>{
		handleClose();
	};

	return <div className={styles.clientsTable} data-testid={'clients-table'}>
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Client Name</TableCell>
						<TableCell>Pets</TableCell>
						<TableCell>Total Paid</TableCell>
						<TableCell>Grooming Frequency</TableCell>
						<TableCell>Last Service</TableCell>
						<TableCell>Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{clients.map((client, index) => (
						<TableRow key={index}>
							<TableCell>{client.name}</TableCell>
							<TableCell>{client.address}</TableCell>
							<TableCell>{client.email}</TableCell>
							<TableCell>{client.name}</TableCell>
							<TableCell>{client.address}</TableCell>
							<TableCell>
								<IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
									<MoreVertIcon />
								</IconButton>
								<Menu
									id="long-menu"
									anchorEl={anchorEl}
									keepMounted
									open={open}
									onClose={handleClose}
								>
									<MenuItem onClick={() => handleGoToClientPage(client)}>
										Go to Client Page
									</MenuItem>
								</Menu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	</div>
}

 */

// Path: src/pages/clients-list/components/clients-table/index.stories.tsx

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
