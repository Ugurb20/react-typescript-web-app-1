import React, { useState } from 'react';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import style from './index.module.scss';
import { Tab, Tabs } from '@mui/material';
import { AppointmentsColumn } from '@components/calendar/appointment-list/components/column';
import { TabPanel } from '@components/calendar/appointment-list/components/tab-panel';

export interface AppointmentListDumbProps {
  pendingAppointments: AppointmentEntity[];
  waitlistAppointments: AppointmentEntity[];
  cancelledAppointments: AppointmentEntity[];
}

export const AppointmentListDumb: React.FC<AppointmentListDumbProps> = ({
  pendingAppointments = [],
  waitlistAppointments = [],
  cancelledAppointments = [],
}) => {
  const [selectedTab, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={style.appointmentList}>
      <Tabs value={selectedTab} onChange={handleChange} variant={'fullWidth'}>
        <Tab label="Pending" />
        <Tab label="Waitlist" />
        <Tab label="Cancelled" />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <AppointmentsColumn appointments={pendingAppointments} />
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <AppointmentsColumn appointments={waitlistAppointments} />
      </TabPanel>
      <TabPanel value={selectedTab} index={2}>
        <AppointmentsColumn appointments={cancelledAppointments} />
      </TabPanel>
    </div>
  );
};
