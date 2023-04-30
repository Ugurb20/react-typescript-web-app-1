import { InvoiceDistributionResponse } from '@domain/types/responses/analytics/invoice-distribution';
import { useEffect, useState } from 'react';
import { YearlyAppointmentSummaryResponse } from '@domain/types/responses/analytics/yearly-appointment-summary';
import { ServiceDataResponse } from '@domain/types/responses/analytics/service-data';
import { useInjection } from 'inversify-react';
import { AnalyticsInvoiceDistributionUseCase } from '@domain/usecases/analytics/invoice-distribution';
import { AnalyticsCancellationRateUseCase } from '@domain/usecases/analytics/cancellation-rate';
import { AnalyticsNoShowRateUseCase } from '@domain/usecases/analytics/no-show-rate';
import { AnalyticsTotalVisitsUseCase } from '@domain/usecases/analytics/total-visits';
import { AnalyticsYearlyAppointmentSummaryUseCase } from '@domain/usecases/analytics/yearly-appointment-summary';

export interface CustomerAnalyticsHookProps {
  id: number;
}

export const useCustomerAnalytics = ({ id }: CustomerAnalyticsHookProps) => {
	const [invoiceDistribution, setInvoiceDistribution] =
    useState<InvoiceDistributionResponse | null>(null);
	const [cancellationRate, setCancellationRate] = useState<number | null>(null);
	const [noShowRate, setNoShowRate] = useState<number | null>(null);
	const [totalVisits, setTotalVisits] = useState<ServiceDataResponse | null>(
		null
	);
	const [yearlyAppointmentSummary, setYearlyAppointmentSummary] =
    useState<YearlyAppointmentSummaryResponse | null>(null);

	const invoiceDistributionUseCase =
    useInjection<AnalyticsInvoiceDistributionUseCase>(
    	AnalyticsInvoiceDistributionUseCase
    );
	const cancellationRateUseCase =
    useInjection<AnalyticsCancellationRateUseCase>(
    	AnalyticsCancellationRateUseCase
    );
	const noShowRateUseCase = useInjection<AnalyticsNoShowRateUseCase>(
		AnalyticsNoShowRateUseCase
	);
	const totalVisitsUseCase = useInjection<AnalyticsTotalVisitsUseCase>(
		AnalyticsTotalVisitsUseCase
	);
	const yearlyAppointmentSummaryUseCase =
    useInjection<AnalyticsYearlyAppointmentSummaryUseCase>(
    	AnalyticsYearlyAppointmentSummaryUseCase
    );

	useEffect(() => {
		invoiceDistributionUseCase.call(id).then(response => {
			setInvoiceDistribution(response);
		});
		cancellationRateUseCase.call(id).then(response => {
			setCancellationRate(response);
		});
		noShowRateUseCase.call(id).then(response => {
			setNoShowRate(response);
		});
		totalVisitsUseCase.call(id).then(response => {
			setTotalVisits(response);
		});
		yearlyAppointmentSummaryUseCase.call(id).then(response => {
			setYearlyAppointmentSummary(response);
		});
	}, [id]);
	return {
		invoiceDistribution,
		cancellationRate,
		noShowRate,
		totalVisits,
		yearlyAppointmentSummary,
	};
};
