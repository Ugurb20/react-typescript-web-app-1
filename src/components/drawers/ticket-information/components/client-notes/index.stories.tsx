// @ts-nocheck
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { ClientNotes } from '@components/drawers/ticket-information/components/client-notes/index.dumb';

const appointmentGenerator = new AppointmentMockGenerator();
const appointment = appointmentGenerator.generateOne();

export default {
  title: 'Components/Drawers/TicketInformation/ClientNotes',
  component: ClientNotes,
};

const Template = args => <ClientNotes {...args} />;
type Story = StoryObj<typeof ClientNotes>;

export const Default: Story = Template.bind({});
Default.args = {
  appointment,
};
