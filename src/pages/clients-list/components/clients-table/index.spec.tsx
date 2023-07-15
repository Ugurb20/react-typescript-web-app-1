import React from 'react';
import { ClientsTableDumb, ClientsTableDumbProps } from '@pages/clients-list/components/clients-table/index.dumb';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomerMockGenerator } from '@test/__mocks__/types/entities/customer';
import { PAGE_SIZE } from '@common/constants';

describe('ClientsTableDumb', () => {

	const clientGenerator = new CustomerMockGenerator();

	let clients: any[];
	let props: ClientsTableDumbProps;
	const clientsTablePaginationTestId = 'clients-table-pagination';

	beforeEach(()=>{
		clients = clientGenerator.generateMany(200);
		props = {
			clients:clients.slice(0, PAGE_SIZE),
			onPageChange: jest.fn(),
			onSort: jest.fn(),
			onClientClick: jest.fn(),
			currentPage: 0,
			totalItems: 200,
			sort: 'name',
		} ;
	});

	it('should be defined',() => {
		expect(ClientsTableDumb).toBeDefined();
	});
	it('should show totalItems',() => {
		const props = {
			clients: clientGenerator.generateMany(1),
			onPageChange: jest.fn(),
			onRowClick: jest.fn(),
			onSort: jest.fn(),
			currentPage: 0,
			totalItems: 1,
			sort: 'name',
		};
		const { getByTestId } = render(<ClientsTableDumb {...props}/>);
		const tablePagination = getByTestId(clientsTablePaginationTestId);
		expect(tablePagination).toHaveTextContent('1–1 of 1');
	});

	it('should show correct totalItems',() => {
		const { getByTestId } = render(<ClientsTableDumb {...props}/>);
		const tablePagination = getByTestId(clientsTablePaginationTestId);
		expect(tablePagination).toHaveTextContent(`1–${PAGE_SIZE} of 200`);
	});

	it('should show correct number of rows',() => {
		const { getAllByTestId } = render(<ClientsTableDumb {...props}/>);
		const tableRows = getAllByTestId('clients-table-row');
		expect(tableRows.length).toEqual(PAGE_SIZE);
	});

	it('should be called when page can be changed to next page',() => {
		const { getByTestId } = render(<ClientsTableDumb {...props}/>);
		const tablePagination = getByTestId(clientsTablePaginationTestId);
		// find class MuiTablePagination-actions
		const nextPageButton = tablePagination.querySelector('.MuiTablePagination-actions button:last-child');
		fireEvent.click(nextPageButton as Element);
		expect(props.onPageChange).toHaveBeenCalledWith(1);
		expect(props.onPageChange).toHaveBeenCalledWith(1);
	});
	it('should not call when page is at the end and next page is called',() => {
		props.currentPage = 9;
		const { getByTestId } = render(<ClientsTableDumb {...props}/>);
		const tablePagination = getByTestId(clientsTablePaginationTestId);
		// find class MuiTablePagination-actions
		const nextPageButton = tablePagination.querySelector('.MuiTablePagination-actions button:last-child');
		fireEvent.click(nextPageButton as Element);
		expect(props.onPageChange).not.toHaveBeenCalled();
	});
	it('should not call when page is at the start and previous page is called',() => {
		props.currentPage = 0;
		const { getByTestId } = render(<ClientsTableDumb {...props}/>);
		const tablePagination = getByTestId(clientsTablePaginationTestId);
		// find class MuiTablePagination-actions
		const nextPageButton = tablePagination.querySelector('.MuiTablePagination-actions button:first-child');
		fireEvent.click(nextPageButton as Element);
		expect(props.onPageChange).not.toHaveBeenCalled();
	});
	it('should be called when page can be changed to previous page',() => {
		props.currentPage = 1;
		const { getByTestId } = render(<ClientsTableDumb {...props}/>);
		const tablePagination = getByTestId(clientsTablePaginationTestId);
		// find class MuiTablePagination-actions
		const nextPageButton = tablePagination.querySelector('.MuiTablePagination-actions button:first-child');
		fireEvent.click(nextPageButton as Element);
		expect(props.onPageChange).toHaveBeenCalledWith(0);
	});
});
