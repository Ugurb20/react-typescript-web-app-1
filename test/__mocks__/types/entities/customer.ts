import { injectable } from 'inversify';
import { faker } from '@faker-js/faker';
import { MockGenerator } from '@test/__mocks__/types/mock-generator';
import { CustomerEntity } from '@domain/types/entities/customer';

@injectable()
export class CustomerMockGenerator implements MockGenerator<CustomerEntity> {
  generateMany(count: number): CustomerEntity[] {
    return new Array(count).fill(null).map(() => this.generateOne());
  }

  generateOne(): CustomerEntity {
    return {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
      uid: faker.datatype.uuid(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.secondaryAddress(),
      role: faker.datatype.number(),
      validated: faker.datatype.boolean(),
    } as CustomerEntity;
  }
}
