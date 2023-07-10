import { injectable } from 'inversify';
import { faker } from '@faker-js/faker';
import { MockGenerator } from '@test/__mocks__/types/mock-generator';
import { EmployeeEntity } from '@domain/types/entities/employee';

@injectable()
export class EmployeeMockGenerator extends MockGenerator<EmployeeEntity> {
  generateMany(count: number): EmployeeEntity[] {
    return new Array(count).fill(null).map(() => this.generateOne());
  }

  generateOne(): EmployeeEntity {
    return {
      id: faker.datatype.number(),
      name: faker.name.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      created_at: faker.date.past().toString(),
      updated_at: faker.date.past().toString(),
      role: faker.name.jobTitle(),
    } as EmployeeEntity;
  }
}
