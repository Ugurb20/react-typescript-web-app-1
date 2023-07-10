// @ts-nocheck
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppointmentCardDumb, AppointmentCardDumbProps } from './index.dumb';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { getTestContainer } from '@common/inversion-container-test';
import { Provider as InversionProvider } from 'inversify-react';
import { ResizableAppointmentCard } from '@components/cards/appointment-card/components/resizable';

export default {
  title: 'Components/Cards/AppointmentCard',
  component: AppointmentCardDumb,
} as Meta;

const container = getTestContainer();

const Template = (args: AppointmentCardDumbProps) => (
  <InversionProvider container={container}>
    <ResizableAppointmentCard {...args} />
  </InversionProvider>
);
const generator = new AppointmentMockGenerator();

type Story = StoryObj<AppointmentCardDumbProps>;

export const Default: Story = Template.bind({});
Default.args = {
  appointment: generator.generateOne(),
  sizingStrategy: {
    width: '160px',
    height: '160px',
    zIndex: 1,
  },
};
