import { IService } from '@domain/interfaces/service';
import { ColorStrategy } from '@domain/types/common/color-strategy';
import { COMPLETED_COLOR_STRATEGY } from '@quicker/style/colors/strategies';
import { injectable } from 'inversify';

@injectable()
export class AppointmentCardColorStrategyService implements IService {
	getColorStrategy(status: string): ColorStrategy {
		return COMPLETED_COLOR_STRATEGY;
	}
}
