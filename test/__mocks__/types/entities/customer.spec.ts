import { CustomerMockGenerator } from '@test/__mocks__/types/entities/customer';

describe('CustomerMockGenerator', () => {
  it('should be defined', () => {
    expect(CustomerMockGenerator).toBeDefined();
  });
  describe('generateOne', () => {
    it('should generate one', () => {
      const mockGenerator = new CustomerMockGenerator();
      const result = mockGenerator.generateOne();
      expect(result).toBeTruthy();
    });
    it('should generate valid entity.', () => {
      const mockGenerator = new CustomerMockGenerator();
      const result = mockGenerator.generateOne();
      expect(result).toBeDefined();
      expect(result.id).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.email).toBeDefined();
      expect(result.phone).toBeDefined();
      expect(result.address).toBeDefined();
      expect(result.role).toBeDefined();
      expect(result.validated).toBeDefined();
    });
  });
  describe('generateMany', () => {
    it('should generate many', () => {
      const mockGenerator = new CustomerMockGenerator();
      const result = mockGenerator.generateMany(10);
      expect(result).toBeTruthy();
      expect(result.length).toBe(10);
    });
    it('should generate valid entities.', () => {
      const mockGenerator = new CustomerMockGenerator();
      const result = mockGenerator.generateMany(10);
      expect(result).toBeTruthy();
      expect(result.length).toBe(10);
      expect(result[0].id).toBeDefined();
      expect(result[0].name).toBeDefined();
      expect(result[0].email).toBeDefined();
      expect(result[0].phone).toBeDefined();
      expect(result[0].address).toBeDefined();
      expect(result[0].role).toBeDefined();
      expect(result[0].validated).toBeDefined();
    });
  });
});
