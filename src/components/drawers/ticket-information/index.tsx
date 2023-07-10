import { useTicketInformation } from '@components/drawers/ticket-information/index.context';
import { Drawer } from '@mui/material';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import { TicketInformationDumb } from '@components/drawers/ticket-information/index.dumb';

export const TicketInformation = () => {
  const { appointment, isOpen, setIsOpen } = useTicketInformation();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={handleClose}>
      <TicketInformationDumb appointment={appointment as AppointmentEntity} />
    </Drawer>
  );
};
