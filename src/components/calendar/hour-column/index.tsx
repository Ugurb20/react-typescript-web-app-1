import React from 'react';
import style from './index.module.scss';

export interface HourElementProps {
  hour: number;
  height: string;
  width: string;
}

export interface HourColumnDumbProps {
  startHour: number;
  endHour: number;
  hourHeight: string;
  hourWidth: string;
}

export const HourElement: React.FC<HourElementProps> = ({
	hour,
	height,
}) => {
	const styleObject = {
		height,
	};
	let hourText = '';

	if (hour < 0 || hour > 24) {
		throw new Error('Invalid hour');
	} else if (hour === 0 || hour === 24) {
		hourText = '12AM';
	} else if(hour === 12){
		hourText = '12PM';
	} else if (hour > 12) {
		hourText = `${hour - 12}PM`;
	} else {
		hourText = `${hour}AM`;
	}
	return (
		<div
			data-testid={'hour-element'}
			className={style.hourElement}
			style={styleObject}
		>
			{hourText}
		</div>
	);
};

export const HourColumn: React.FC<HourColumnDumbProps> = ({
	startHour,
	endHour,
	hourHeight,
	hourWidth,
}) => {
	return (
		<div className={style.hourColumn}>
			<div
				style={{
					height: '8px',
				}}
			/>
			{[...new Array(endHour - startHour + 1).keys()].map(hour => {
				return (
					<HourElement
						key={startHour + hour}
						hour={startHour + hour}
						height={hourHeight}
						width={hourWidth}
					/>
				);
			})}
		</div>
	);
};
