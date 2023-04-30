import { faker } from '@faker-js/faker';
import { injectable } from 'inversify';
import { PetEntity } from '@domain/types/entities/pet';
import { MockGenerator } from '@test/__mocks__/types/mock-generator';

@injectable()
export class PetMockGenerator extends MockGenerator<PetEntity> {
  generateMany(count: number): PetEntity[] {
    return new Array(count)
      .fill(null)
      .map((_, index) => this.generateOne(index));
  }

  generateOne(id?: number): PetEntity {
    return {
      id: id ?? faker.datatype.number(),
      created_at: faker.date.past().toString(),
      updated_at: faker.date.past().toString(),
      name: faker.name.firstName(),
      breed: faker.name.jobTitle(),
      age: faker.datatype.number({ min: 0, max: 32 }),
      weight: faker.datatype.number(),
      description: faker.lorem.paragraph(),
      rabies_vaccination: faker.date.past().toString(),
      employee_notes: faker.lorem.paragraph(),
      customer_notes: faker.lorem.paragraph(),
      special_handling: faker.datatype.boolean(),
      coat_type: faker.name.jobTitle(),
      owner: faker.datatype.number(),
      fixed: faker.datatype.boolean(),
      gender: faker.datatype.boolean() ? 'Male' : 'Female',
    } as PetEntity;
  }
}
