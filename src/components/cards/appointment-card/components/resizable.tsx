import React, { useState } from 'react';
import { SizingStrategy } from '@domain/types/common/sizing-strategy';
import { ResizableBox } from 'react-resizable';
import style from './resizable.module.scss';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { AppointmentCardDumb } from '@components/cards/appointment-card/index.dumb';
import useCalendarContext from '@domain/hooks/calendar/use-calendar-context';

export interface ResizableAppointmentCardProps {
  appointment: AppointmentEntity;
  sizingStrategy: SizingStrategy;
  onUpdate: (old: AppointmentEntity, newOne: AppointmentEntity) => void;
  children?: React.ReactNode;
}

export const ResizableAppointmentCard = ({
	appointment,
	sizingStrategy,
}: ResizableAppointmentCardProps) => {
	const { width, height, zIndex } = sizingStrategy;
	const { boxHeight } = useCalendarContext();

	const boxHeightNumber = Number.parseInt(boxHeight.replace('px', ''));
	const heightNumber = Number.parseInt(height.replace('px', ''));
	const widthNumber = Number.parseInt(width.replace('px', ''));

	const [heightState, setHeightState] = useState(heightNumber);

	return (
		<ResizableBox
			className={style.box}
			height={heightNumber}
			width={widthNumber}
			onResize={(e, data) => {
				if (data.size.height !== heightState) {
					setHeightState(data.size.height);
				}
			}}
			onResizeStop={(e, data) => {}}
			resizeHandles={['s', 'n']}
			draggableOpts={{ grid: [boxHeightNumber / 4, boxHeightNumber / 4] }}
		>
			<AppointmentCardDumb
				appointment={appointment}
				sizingStrategy={{
					width: `${widthNumber}px`,
					height: `${heightState}px`,
					zIndex,
				}}
			/>
		</ResizableBox>
	);
};
