import { IService } from '@domain/interfaces/service';
import { injectable } from 'inversify';

@injectable()
export class DateUtilsService implements IService {
	formatAMPM(date: Date): string {
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		const strMinutes =
      minutes === 0 ? '' : ':' + (minutes < 10 ? '0' + minutes : minutes);
		return hours + strMinutes + ampm;
	}

	getTimeInterval(start: Date, end: Date): string {
		const startStr = this.formatAMPM(start);
		const endStr = this.formatAMPM(end);
		return `${startStr}-${endStr}`;
	}

	formatDate(date: Date): string {
		const day = date.getDate();
		const month = date.getMonth() + 1; // JavaScript months are 0-11
		const year = date.getFullYear();

		return `${month < 10 ? '0' : ''}${month}/${
			day < 10 ? '0' : ''
		}${day}/${year}`;
	}

	getDateInterval(start: Date, end: Date): string {
		return this.formatDate(start) + ' ' + this.getTimeInterval(start, end);
	}
}
