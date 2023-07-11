import { ServiceDataResponse } from './service-data';

describe('ServiceDataResponse', () => {
	it('should have we_wash and grooming.', () => {
		const serviceDataResponse: ServiceDataResponse = {
			we_wash: 0,
			grooming: 15,
		};
		expect(serviceDataResponse.we_wash).toBeDefined();
		expect(serviceDataResponse.grooming).toBeDefined();
	});
});
