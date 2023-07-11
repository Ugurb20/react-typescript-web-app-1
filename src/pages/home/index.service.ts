import { inject, injectable } from 'inversify';
import { IService } from '@domain/interfaces/service';
import { AppointmentFilterUseCase } from '@domain/usecases/appointment/filter';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { BranchDailyEmployeesUseCase } from '@domain/usecases/branch/daily-employees';
import { EmployeeEntity } from '@domain/types/entities/employee';

@injectable()
export class HomePageService implements IService {
	constructor(
    @inject(AppointmentFilterUseCase)
    private appointmentFilterUseCase: AppointmentFilterUseCase,
    @inject(BranchDailyEmployeesUseCase)
    private branchDailyEmployeesUseCase: BranchDailyEmployeesUseCase
	) {}

	async getDailyAppointments(
		branch: number,
		date: Date
	): Promise<AppointmentEntity[]> {
		const startDate = new Date(date);
		const start__gt = startDate.toISOString().split('T')[0];
		startDate.setDate(startDate.getDate() + 1);
		const start__lt = startDate.toISOString().split('T')[0];
		const response = await this.appointmentFilterUseCase.call({
			branch,
			offset: 0,
			limit: 200,
			start__gt,
			start__lt,
		});
		return response.results;
	}

	async getBranchEmployees(
		branch: number,
		date: Date
	): Promise<EmployeeEntity[]> {
		const dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		return this.branchDailyEmployeesUseCase.call({
			id: branch,
			date: dateStr,
		});
	}
}
