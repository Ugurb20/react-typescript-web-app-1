import { BranchEntity } from '@domain/types/entities/branch';
describe('BranchEntity', function () {
  it('should be defined', function () {
    const branchEntity: BranchEntity = {
      id: 1,
      name: 'name',
      address: 'address',
      description: 'description',
      phone: 'phone',
      email: 'email',
      created_at: new Date().toDateString(),
      updated_at: new Date().toDateString(),
    };
    expect(branchEntity).toBeDefined();
  });
});
