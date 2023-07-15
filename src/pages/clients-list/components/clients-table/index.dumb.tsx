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
	IconButton, TableFooter, TablePagination,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
import styles from './index.module.scss';
import { PAGE_SIZE } from '@common/constants';

export interface ClientsTableDumbProps {
	clients: CustomerEntity[];
	onPageChange: (page: number) => void;
	onSort?: (sort: string) => void;
	currentPage: number;
	totalItems: number;
	sort?: string;
	onClientClick?: (client: CustomerEntity) => void;
}

export const ClientsTableDumb: React.FC<ClientsTableDumbProps> = ({
	clients,
	onPageChange,
	totalItems,
	currentPage,
	onClientClick,
}) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: {
		currentTarget: React.SetStateAction<HTMLElement | null>;
	}) => setAnchorEl(event.currentTarget)

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handlePageChange = (_: any,page:number) => {
		onPageChange && onPageChange(page);
	}

	const handleGoToClientPage = (client: CustomerEntity) =>{
		onClientClick && onClientClick(client);
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
						<TableRow data-testid={'clients-table-row'} key={client.id}>
							<TableCell>{client.name}</TableCell>
							<TableCell>{client.address}</TableCell>
							<TableCell>{client.email}</TableCell>
							<TableCell>{client.name}</TableCell>
							<TableCell>{client.address}</TableCell>
							<TableCell>
								<IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
									<MoreVertIcon data-testid={'clients-table-more-button'} />
								</IconButton>
								<Menu
									data-testid={'clients-table-menu'}
									anchorEl={anchorEl}
									keepMounted
									open={open}
									onClose={handleClose}
								>
									<MenuItem data-testid={'clients-table-go-to-client-page-button'} onClick={() => handleGoToClientPage(client)}>
										Go to Client Page
									</MenuItem>
								</Menu>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							data-testid={'clients-table-pagination'}
							colSpan={6}
							count={totalItems}
							rowsPerPage={PAGE_SIZE}
							rowsPerPageOptions={[]}
							onPageChange={handlePageChange}
						  page={currentPage}/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	</div>
}
