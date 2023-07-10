import ProductMockGenerator from '@test/__mocks__/types/entities/product';

describe('ProductMockGenerator', () => {
  it('should be defined', () => {
    expect(ProductMockGenerator).toBeDefined();
  });

  it('should be constructable', () => {
    const productMockGenerator = new ProductMockGenerator();
    expect(productMockGenerator).toBeDefined();
  });

  it('should be able to generate one', () => {
    const productMockGenerator = new ProductMockGenerator();
    const product = productMockGenerator.generateOne();
    expect(product).toBeDefined();
    expect(product.id).toBeDefined();
    expect(product.created_at).toBeDefined();
    expect(product.name).toBeDefined();
    expect(product.description).toBeDefined();
    expect(product.cost).toBeDefined();
    expect(product.updated_at).toBeDefined();
    expect(product.category).toBeDefined();
    expect(product.sub_category).toBeDefined();
  });

  it('should be able to generate many', () => {
    const productMockGenerator = new ProductMockGenerator();
    const products = productMockGenerator.generateMany(10);
    expect(products).toBeDefined();
    expect(products.length).toBe(10);
    products.forEach(product => {
      expect(product.id).toBeDefined();
      expect(product.created_at).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.description).toBeDefined();
      expect(product.cost).toBeDefined();
      expect(product.updated_at).toBeDefined();
      expect(product.category).toBeDefined();
      expect(product.sub_category).toBeDefined();
    });
  });
});
