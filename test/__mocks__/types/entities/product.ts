import { faker } from '@faker-js/faker';
import {
  CATEGORIES,
  MAX_PRICE,
  MIN_PRICE,
} from '@test/__mocks__/types/entities/product.constants';
import { ProductEntity } from '@domain/types/entities/product';
import { MockGenerator } from '@test/__mocks__/types/mock-generator';

const categoryKeys: string[] = Object.keys(CATEGORIES);

class ProductMockGenerator extends MockGenerator<ProductEntity> {
  generateMany(count: number): ProductEntity[] {
    return new Array(count).fill(null).map(() => this.generateOne());
  }

  generateOne(): ProductEntity {
    const category: string = faker.helpers.arrayElement(categoryKeys);

    const sub_category: string = faker.helpers.arrayElement(
      (CATEGORIES[category] ?? []) as string[]
    );

    return {
      id: faker.datatype.number(),
      created_at: faker.date.past().toString(),
      name: faker.name.firstName(),
      description: faker.name.jobTitle(),
      cost: faker.datatype.number({
        min: MIN_PRICE,
        max: MAX_PRICE,
      }),
      updated_at: faker.date.past().toString(),
      category,
      sub_category,
    };
  }
}

export default ProductMockGenerator;
