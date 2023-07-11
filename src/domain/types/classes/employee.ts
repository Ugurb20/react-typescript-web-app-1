import { EmployeeEntity } from '@domain/types/entities/employee';
import { ICalendarItem } from '@domain/interfaces/calendar-item';

export class EmployeeEntityImpl implements EmployeeEntity, ICalendarItem {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static fromJSON(json: any): EmployeeEntityImpl {
		return new EmployeeEntityImpl(json);
	}

	id: number;

	name: string;

	email: string;

	phone: string;

	role: string;

	created_at: string;

	updated_at: string;

	constructor(entity: EmployeeEntity) {
		this.id = entity.id;
		this.name = entity.name;
		this.email = entity.email;
		this.phone = entity.phone;
		this.role = entity.role;
		this.created_at = entity.created_at || '';
		this.updated_at = entity.updated_at || '';
	}

	toString(): string {
		return this.name;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(obj: any): boolean {
		if (obj instanceof EmployeeEntityImpl) {
			return obj.id === this.id;
		}
		return false;
	}

	
	
}
