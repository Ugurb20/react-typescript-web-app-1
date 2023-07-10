import React from 'react';
import styles from './index.module.scss';

// Import Material-UI Icons
import {
	EmojiNature,
	Face,
	Notes,
	Pets,
	School,
	Straighten,
	Warning,
} from '@mui/icons-material';
import { AppointmentEntity } from '@domain/types/entities/appointment';

export interface ClientPetInfoDumbProps {
  appointment: AppointmentEntity;
}

const ClientPetInfoDumb: React.FC<ClientPetInfoDumbProps> = ({
	appointment,
}) => {
	return (
		<div className={styles.card}>
			<div className={styles.header}>Client Details</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<Face /> Client Name
				</div>
				<div className={styles.column}>{appointment.customer.name}</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<Pets /> Pet / Age
				</div>
				<div className={styles.column}>
					{appointment.dog.name} / {appointment.dog.age}
				</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<EmojiNature /> Breed
				</div>
				<div className={styles.column}>{appointment.dog.breed}</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<School /> Coat Type
				</div>
				<div className={styles.column}>{appointment.dog.coat_type}</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<Straighten /> Size
				</div>
				<div className={styles.column}>{appointment.dog.weight}</div>
			</div>
			<div className={styles.row}>
				<div className={styles.column}>
					<Warning /> Special Handling
				</div>
				<div className={styles.column}>{appointment.dog.special_handling}</div>
			</div>

			<div className={styles.column}>
				<textarea
					value={appointment.dog.employee_notes}
					placeholder={'Special handling notes'}
					maxLength={200}
					className={styles.textArea}
				></textarea>
			</div>
		</div>
	);
};

export default ClientPetInfoDumb;
