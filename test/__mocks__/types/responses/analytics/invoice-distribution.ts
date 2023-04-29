import { MockGenerator } from '@test/__mocks__/types/mock-generator';
import { InvoiceDistributionResponse } from '@domain/responses/analytics/invoice-distribution';

export class InvoiceDistributionResponseMockGenerator
  implements MockGenerator<InvoiceDistributionResponse>
{
  generateOne(): InvoiceDistributionResponse {
    const we_wash = Math.random();
    const grooming = (1 - we_wash) * Math.random();
    const tips = (1 - we_wash - grooming) * Math.random();
    const products = 1 - we_wash - grooming - tips;
    return {
      we_wash,
      grooming,
      tips,
      products,
    };
  }
  generateMany(N: number): InvoiceDistributionResponse[] {
    return new Array(N).fill(null).map(() => this.generateOne());
  }
}
