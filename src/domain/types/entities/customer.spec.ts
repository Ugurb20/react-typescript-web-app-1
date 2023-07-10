import { CustomerEntity } from '@domain/types/entities/customer';

describe('CustomerEntity', () => {
	it('should be defined', () => {
		const customer = {
			id: 1,
			name: 'name',
			uid: 'uid',
			email: 'email',
			phone: 'phone',
			address: 'address',
			validated: true,
		} as CustomerEntity;
		expect(customer).toBeDefined();
	});
});
