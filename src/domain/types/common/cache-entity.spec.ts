import { CacheEntity } from '@domain/types/common/cache-entity';

describe('DbEntity', () => {
	it('should have id defined', () => {
		const data = {
			id: 1,
		} as CacheEntity;
		expect(data.id).toBeDefined();
	});
});
