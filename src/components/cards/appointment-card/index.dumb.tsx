import React from 'react';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { ColorStrategy } from '@domain/types/common/color-strategy';
import { SizingStrategy } from '@domain/types/common/sizing-strategy';
import style from './index.module.scss';
import { useInjection } from 'inversify-react';
import { DateUtilsService } from '@services/date-utils';
import { AppointmentCardColorStrategyService } from '@components/cards/appointment-card/services/color-strategy.service';

export interface AppointmentCardDumbProps {
  appointment: AppointmentEntity;
  onClick?: () => void;
  onDoubleClick?: () => void;
  onContextMenu?: () => void;
  onHover?: () => void;
  sizingStrategy: SizingStrategy;
}

export const AppointmentCardDumb = ({
	appointment,
	sizingStrategy,
}: AppointmentCardDumbProps) => {
	const { width, height, zIndex } = sizingStrategy;
	const { start, end } = appointment;
	const dateUtilsService = useInjection<DateUtilsService>(DateUtilsService);
	const colorStrategyService =
    useInjection<AppointmentCardColorStrategyService>(
    	AppointmentCardColorStrategyService
    );

	const startDate = new Date(start);
	const endDate = new Date(end);
	const formattedHours = dateUtilsService.getTimeInterval(startDate, endDate);
	const colorStrategy = colorStrategyService.getColorStrategy(
		appointment.status
	);
	// 9:30am - 10:00am

	return (
		<div
			className={style.appointmentCard}
			style={{
				width,
				height,
				zIndex,
			}}
		>
			<div
				style={{
					backgroundColor: colorStrategy.header,
				}}
				className={style.appointmentCardHeader}
			>
				<div>{formattedHours}</div>
			</div>
			<div
				style={{
					backgroundColor: colorStrategy.background,
				}}
				className={style.appointmentCardBody}
			>
				<h5>{appointment.customer.name}</h5>
				<h6>
					<span className={style.appointmentCardBodyDogName}>
						{appointment.dog.name}{' '}
					</span>
          - {appointment.dog.breed}
				</h6>
				<h6>{appointment.appointment_type}</h6>
			</div>
		</div>
	);
};
