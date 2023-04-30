import { InvoiceDistributionResponse } from './invoice-distribution';

describe('InvoiceDistribution', () => {
	it('should be summed to 1.0', () => {
		const invoiceDistribution: InvoiceDistributionResponse = {
			we_wash: 0.1,
			grooming: 0.2,
			tips: 0.3,
			products: 0.4,
		};
		const sum = Object.values(invoiceDistribution).reduce((a, b) => a + b);
		expect(sum).toBe(1);
	});
});
