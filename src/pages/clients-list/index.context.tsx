/*
export interface HomePageContextProps {
  date: Date;
  employee?: EmployeeEntity | null;
  branch?: BranchEntity | null;
  setDate?: React.Dispatch<React.SetStateAction<Date>>;
  setEmployee?: React.Dispatch<React.SetStateAction<EmployeeEntity | null>>;
  setBranch?: React.Dispatch<React.SetStateAction<BranchEntity | null>>;
  onDateChange?: (date: Date) => void;
  onEmployeeChange?: (employee: EmployeeEntity | null) => void;
  onBranchChange?: (branch: BranchEntity | null) => void;
}
 */

import React from 'react';
export interface ClientsListPageContextProps {
	clientName?: string;
	setClientName?: React.Dispatch<React.SetStateAction<string>>;
	onClientNameChange?: (name: string) => void;
	sort?: string;
	setSort?: React.Dispatch<React.SetStateAction<string>>;
	onSortChange?: (sort: string) => void;
	page: number;
	setPage?: React.Dispatch<React.SetStateAction<number>>;
	onPageChange?: (page: number) => void;
}

export const ClientsListPageContext = React.createContext<ClientsListPageContextProps>(
	{
		clientName: '',
		sort: '',
		page: 0,
	}
);

export interface ClientsListPageContextProviderProps extends ClientsListPageContextProps {
	children: React.ReactNode;
}

export const ClientsListPageContextProvider: React.FC<
	ClientsListPageContextProviderProps
> = ({
	children,
	clientName = '',
	sort = '',
	page = 0,
	onClientNameChange,
	onSortChange,
	onPageChange,
}) => {
	const [clientNameState, setClientNameState] = React.useState<string>('');
	const [sortState, setSortState] = React.useState<string>('');
	const [pageState, setPageState] = React.useState<number>(0);

	const handleSetClientName = (name: string) => {
		setClientNameState(name);
		onClientNameChange && onClientNameChange(name);
	};

	const handleSetSort = (sort: string) => {
		setSortState(sort);
		onSortChange && onSortChange(sort);
	};

	const handleSetPage = (page: number) => {
		setPageState(page);
		onPageChange && onPageChange(page);
	};

	const clientsListPageContext = {
		clientName: clientNameState,
		sort: sortState,
		page: pageState,
		setClientName: handleSetClientName,
		setSort: handleSetSort,
		setPage: handleSetPage,
	};

	return (
		<ClientsListPageContext.Provider value={clientsListPageContext as ClientsListPageContextProps}>
			{children}
		</ClientsListPageContext.Provider>
	);
}
