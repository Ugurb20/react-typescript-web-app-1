import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { EmployeeMockGenerator } from '@test/__mocks__/types/entities/employee';
import { BranchDailyInformationResponse } from '@domain/types/responses/branch/daily-information';

describe('BranchDailyInformationResponse', function () {
	it('should be defined', function () {
		const appointmentGenerator = new AppointmentMockGenerator();
		const employeeGenerator = new EmployeeMockGenerator();
		const response = {
			appointments: appointmentGenerator.generateMany(5),
			employees: employeeGenerator.generateMany(5),
		} as BranchDailyInformationResponse;
		expect(response).toBeDefined();
	});
});
