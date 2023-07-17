import React from 'react';
import { NavigationPanel } from '@components/common/navigation-panel';
import { AppHeaderDumb } from '@components/common/header/index.dumb';
import { ClientsTableDumb } from '@pages/clients-list/components/clients-table/index.dumb';
import styles from './index.module.scss';
export interface ClientsListPageDumbProps {
	clientName?: string;
	sort?: string;
	clients?: any[];
	currentPage?: number;
	totalItems: number;
	onClientNameChange?: (name: string) => void;
	onSortChange?: (sort: string) => void;
	onPageChange?: (page: number) => void;
}

export const ClientsListPageDumb: React.FC<ClientsListPageDumbProps> = ({
	clientName = '',
	sort = '',
	clients = [],
	totalItems,
	currentPage = 0,
	onClientNameChange,
	onSortChange,
	onPageChange,
}) => {
	return <div className={styles.gridContainer}>
		<div className={styles.navigationPanel}>
			<NavigationPanel collapsed={true} />
		</div>
		<div className={styles.header}>
			<AppHeaderDumb />
		</div>
		<div className={styles.dashboard}>
			<ClientsTableDumb clients={clients} sort={sort}  currentPage={currentPage} totalItems={totalItems} onPageChange={onPageChange}/>
		</div>
	</div>;
}
