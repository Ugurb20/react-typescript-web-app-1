// @ts-nocheck
import {
  AppointmentInfoDumb,
  AppointmentInfoProps,
} from '@components/drawers/ticket-information/components/appointment-info/index.dumb';
import { StoryObj, Meta } from '@storybook/react';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { getTestContainer } from '@common/inversion-container-test';
import { Provider as InversionProvider } from 'inversify-react';

export default {
  title: 'Components/Drawers/TicketInformation/AppointmentInfo',
  component: AppointmentInfoDumb,
} as Meta;

const appointmentGenerator = new AppointmentMockGenerator();
const appointment = appointmentGenerator.generateOne();

const props: AppointmentInfoProps = {
  appointment,
};

const container = getTestContainer();

const Template = (args: AppointmentInfoProps) => (
  <InversionProvider container={container}>
    <AppointmentInfoDumb {...args} />
  </InversionProvider>
);

type Story = StoryObj<AppointmentInfoProps>;
export const Default: Story = Template.bind({});
Default.args = props;
