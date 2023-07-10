import React from 'react';
import styled from 'styled-components';
import { GridTemplate } from '@components/drawers/ticket-information/index.stories';
import { AppointmentInfoDumb } from '@components/drawers/ticket-information/components/appointment-info/index.dumb';
import { AppointmentEntity } from '@domain/types/entities/appointment';
import ClientPetInfoDumb from '@components/drawers/ticket-information/components/client-pet-info/index.dumb';
import { ClientNotes } from '@components/drawers/ticket-information/components/client-notes/index.dumb';

const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

const TicketSettings = () => (
  <div style={{ backgroundColor: randomColor() }}>Ticket Settings</div>
);
const AppointmentNotes = () => (
  <div style={{ backgroundColor: randomColor() }}>Appointment Notes</div>
);
const AddOns = () => (
  <div style={{ backgroundColor: randomColor() }}>AddOns</div>
);
const AppointmentHistory = () => (
  <div style={{ backgroundColor: randomColor() }}>Appointment History</div>
);

const Grid = styled.div`
  display: grid;
  height: 100%;
  gap: 8px;
`;

export interface GridTemplateProps {
  gridTemplateColumns: string;
  gridTemplateRows: string;
}

const GridT = styled(Grid)<GridTemplateProps>`
  grid-template-columns: ${props => props.gridTemplateColumns};
  grid-template-rows: ${props => props.gridTemplateRows};
`;

const GridItem = styled.div``;

interface GridItemProps {
  gridColumn: string;
  gridRow: string;
}

const GridItemC = styled(GridItem)<GridItemProps>`
  height: 100%;
  width: 100%;
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
`;

export interface TicketInformationDumbProps {
  appointment: AppointmentEntity;
}

export const TicketInformationDumb: React.FC<TicketInformationDumbProps> = ({
  appointment,
}) => {
  const { customer_notes, employee_notes } = appointment;

  return (
    <div
      style={{
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <GridT
        gridTemplateColumns={'repeat(8, 1fr)'}
        gridTemplateRows={'repeat(8, 1fr)'}
      >
        <GridItemC gridColumn="1 / 4" gridRow="1 / 2">
          <AppointmentInfoDumb appointment={appointment} />
        </GridItemC>
        <GridItemC gridColumn="4 / 7" gridRow="1 / 2">
          <ClientPetInfoDumb appointment={appointment} />
        </GridItemC>
        <GridItemC gridColumn="7 / 9" gridRow="1 / 2">
          <TicketSettings />
        </GridItemC>
        <GridItemC gridColumn="1 / 4" gridRow="2 / 3">
          <ClientNotes
            appointmentNotes={employee_notes}
            clientNotes={customer_notes}
          />
        </GridItemC>
        <GridItemC gridColumn="4 / 7" gridRow="3 / 5">
          <AddOns />
        </GridItemC>
        <GridItemC gridColumn="1 / 9" gridRow="5 / 10">
          <AppointmentHistory />
        </GridItemC>
      </GridT>
    </div>
  );
};
