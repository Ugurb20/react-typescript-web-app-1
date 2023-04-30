import { EmployeeEntity } from '@domain/types/entities/employee';

describe('EmployeeEntity', () => {
	it('should be defined', () => {
		const employee = {
			id: 1,
			name: 'employee 1',
			email: '',
			phone: '123-456-7890',
			role: 'employee',
			created_at: '2020-01-01',
			updated_at: '2020-01-01',
		} as EmployeeEntity;
		expect(employee).toBeDefined();
	});
});
