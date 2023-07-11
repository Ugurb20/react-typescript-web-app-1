import styles from './index.module.scss';
import { Fab } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import WarningIcon from '@mui/icons-material/Warning';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

export interface TicketInformationHeaderDumbProps {
  onCloseButtonClicked: () => void;
  onHistoryButtonClicked: () => void;
  onWarningButtonClicked: () => void;
}

export const TicketInformationHeaderDumb: React.FC<
  TicketInformationHeaderDumbProps
> = ({
  onCloseButtonClicked,
  onHistoryButtonClicked,
  onWarningButtonClicked,
}) => {
  return (
    <div className={styles.ticketInformationHeader}>
      <h3>Ticket Information</h3>
      <div className={styles.ticketInformationHeaderLeft}>
        <Fab size={'small'}>
          <HistoryIcon />
        </Fab>
        <Fab size={'small'}>
          <WarningIcon />
        </Fab>
        <Fab size={'small'} onClick={onCloseButtonClicked}>
          <CloseIcon />
        </Fab>
      </div>
    </div>
  );
};
