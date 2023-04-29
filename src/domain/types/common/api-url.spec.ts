import { ApiUrl } from '@domain/types/common/api-url';

describe('ApiUrl', () => {
	it('should have a value', () => {
		const apiUrl = { value: 'http://localhost:3000' } as ApiUrl;
		expect(apiUrl.value).toBe('http://localhost:3000');
	});
});
