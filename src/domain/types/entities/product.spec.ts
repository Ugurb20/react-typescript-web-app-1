import {ProductEntity} from "./product";
describe('ProductEntity', () => {
	it('should be defined', () => {

		const productEntity: ProductEntity = {
			id: 1,
			created_at: '2021-01-01',
			name: 'test',
			description: 'test',
			cost: 1,
			updated_at: '2021-01-01',
			category: 'test',
			sub_category: 'test',
		};
		expect(productEntity).toBeDefined();
	});
});
