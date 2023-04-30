import { useInjection } from 'inversify-react';
import { AnalyticsAverageServiceTimeUseCase } from '@domain/usecases/analytics/average-service-time';
import { useEffect, useState } from 'react';

export interface PetAnalyticsHookProps {
  id: number;
}
export const usePetAnalytics = ({ id }: PetAnalyticsHookProps) => {
	const [averageServiceTime, setAverageServiceTime] = useState<number | null>(
		null
	);
	const averageServiceTimeUseCase =
    useInjection<AnalyticsAverageServiceTimeUseCase>(
    	AnalyticsAverageServiceTimeUseCase
    );

	useEffect(() => {
		averageServiceTimeUseCase.call(id).then(response => {
			setAverageServiceTime(response);
		});
	}, [id]);
	return {
		averageServiceTime,
	};
};
