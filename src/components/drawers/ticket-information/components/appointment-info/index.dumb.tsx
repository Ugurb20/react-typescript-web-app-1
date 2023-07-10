import React from 'react';
import styles from './index.module.scss';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import {
  AccessTime,
  CalendarToday,
  Face,
  MonetizationOn,
  Payment,
  EventNote,
  Person,
  Schedule,
  ThumbUp,
} from '@mui/icons-material';
import { useInjection } from 'inversify-react';
import { DateUtilsService } from '@services/date-utils';
import { Box } from '@mui/material';

export interface AppointmentInfoProps {
  appointment: AppointmentEntity;
}

export const AppointmentInfoDumb: React.FC<AppointmentInfoProps> = ({
  appointment,
}) => {
  // Date should be in format 05/16/2023 02:00-03:00 PM
  const dateUtilsService = useInjection<DateUtilsService>(DateUtilsService);
  const { start, end } = appointment;
  const startDate = new Date(start);
  const endDate = new Date(end);
  const date = dateUtilsService.getDateInterval(startDate, endDate);
  const duration = (endDate.getTime() - startDate.getTime()) / 1000 / 60;

  return (
    <div className={styles.card}>
      <div>
        <h3>Appointment Info</h3>
      </div>
      <Box
        sx={{
          height: '1px',
          backgroundColor: 'grey.500',
          width: '100%',
        }}
      />
      <div style={{ height: '8px' }} />
      <div className={styles.row}>
        <div className={styles.column}>Appointment ID</div>
        <div className={styles.column}>#{appointment.id}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>Groomer</div>
        <div className={styles.column}>{appointment.employee?.name}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>Date</div>
        <div className={styles.column}>{date}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>Service</div>
        <div className={styles.column}>{appointment.appointment_type}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>Service Time</div>
        <div className={styles.column}>{duration} mins</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>Amount</div>
        <div className={styles.column}>${appointment.cost}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>Tip</div>
        <div className={styles.column}>${appointment.tip}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.column}>Requested Groomer</div>
        <div className={styles.column}>Jane Doe</div>
      </div>
    </div>
  );
};
