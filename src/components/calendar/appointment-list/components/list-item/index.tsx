import React from 'react';
import style from './index.module.scss';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import StarIcon from '@mui/icons-material/Star';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Fab from '@mui/material/Fab';

export interface AppointmentListItemProps {
  appointment: AppointmentEntity;
  onClick?: () => void;
}

export const AppointmentListItem: React.FC<AppointmentListItemProps> = ({
	appointment,
	onClick,
}) => {
	const { dog, customer, appointment_type } = appointment;
	const { special_handling } = dog;

	return (
		<div
			data-testid={'appointment-list-item'}
			className={style.appointmentListItem}
		>
			<div
				data-testid={'appointment-list-item-left'}
				className={style.appointmentListItemLeft}
			>
				<h4>{customer.name}</h4>
				<h5>{dog.name + ' | ' + appointment_type} </h5>
			</div>
			<div
				data-testid={'appointment-list-item-right'}
				className={style.appointmentListItemRight}
			>
				{special_handling && <StarIcon className={style.specialHandling} />}
				<Fab
					className={style.fab}
					color="primary"
					size={'small'}
					aria-label="add"
					onClick={onClick}
				>
					<MoreVertIcon />
				</Fab>
			</div>
		</div>
	);
};
