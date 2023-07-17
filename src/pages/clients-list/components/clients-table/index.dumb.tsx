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
	onPageChange?: (page: number) => void;
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

	return <TableContainer className={styles.clientsTable}  data-testid={'clients-table'}>
		<Table className={styles.clientsTable}>
			<TableHead className={styles.clientsTableHeader}>
				<TableRow className={styles.clientsTableBodyRow}>
					<TableCell className={styles.clientsTableHeaderCell}>Client Name</TableCell>
					<TableCell  className={styles.clientsTableHeaderCell}>Pets</TableCell>
					<TableCell  className={styles.clientsTableHeaderCell}>Total Paid</TableCell>
					<TableCell  className={styles.clientsTableHeaderCell}>Frequency</TableCell>
					<TableCell  className={styles.clientsTableHeaderCell}>Last Service</TableCell>
					<TableCell  className={styles.clientsTableHeaderCell}>Action</TableCell>
				</TableRow>
			</TableHead>
			<TableBody className={styles.clientsTableBody}>
				{clients.map((client, index) => (
					<TableRow data-testid={'clients-table-row'} key={client.id} className={styles.clientsTableBodyRow}>
						<TableCell className={styles.clientsTableBodyRowCell}>{client.name}</TableCell>
						<TableCell className={styles.clientsTableBodyRowCell}>{client.address}</TableCell>
						<TableCell className={styles.clientsTableBodyRowCell}>{client.email}</TableCell>
						<TableCell className={styles.clientsTableBodyRowCell}>{client.name}</TableCell>
						<TableCell className={styles.clientsTableBodyRowCell}>{client.address}</TableCell>
						<TableCell className={styles.clientsTableBodyRowCell}>
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
			<TableFooter className={styles.clientsTableFooter}>
				<TableRow >
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
}
