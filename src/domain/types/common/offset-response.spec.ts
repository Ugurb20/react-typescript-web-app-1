import { PaginationResponse } from '@domain/types/common/pagination-response';

describe('OffsetResponse', () => {
	it('should have results and count defined', () => {
		const data = {
			results: [1],
			count: 1,
		} as PaginationResponse<number>;
		expect(data.results).toBeDefined();
	});
	it('should have next and previous defined', () => {
		const data = {
			next: 'next',
			previous: 'previous',
			results: [1],
			count: 1,
		} as PaginationResponse<number>;
		expect(data.next).toBeDefined();
		expect(data.previous).toBeDefined();
	});
});
