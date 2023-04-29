import { getTestContainer } from '@common/inversion-container-test';
import { ApiUrl } from '@domain/types/common/api-url';
import { ApiUrlSymbol } from '@domain/types/symbols';

describe('Inversion container', () => {
	it('should create a container', () => {
		const container = getTestContainer();
		expect(container).toBeDefined();
	});

	it('should contain API_URL.', () => {
		const container = getTestContainer();
		const apiUrl: ApiUrl = container.get(ApiUrlSymbol);
		expect(apiUrl).toBeDefined();
		expect(apiUrl.value).toBeDefined();
	});
});
