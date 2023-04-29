/*
export interface InvoiceDistributionResponse {
  we_wash: number;
  grooming: number;
  tips: number;
  products: number;
}

 */
import { InvoiceDistributionResponseMockGenerator } from './invoice-distribution';

describe('InvoiceDistributionResponseMockGenerator', () => {
  const generator = new InvoiceDistributionResponseMockGenerator();
  it('should be defined.', () => {
    expect(generator).toBeDefined();
  });
  it('should generate one.', () => {
    const result = generator.generateOne();
    expect(result).toBeDefined();
    expect(result.we_wash).toBeDefined();
    expect(result.grooming).toBeDefined();
    expect(result.tips).toBeDefined();
    expect(result.products).toBeDefined();
  });
  it('should generate many.', () => {
    const result = generator.generateMany(10);
    expect(result).toBeDefined();
    expect(result.length).toBe(10);
  });
  it('result should almost equal to 1.', () => {
    const result = generator.generateOne();
    const sum = Object.values(result).reduce((a, b) => a + b);
    expect(sum).toBeCloseTo(1.0);
  });
});
