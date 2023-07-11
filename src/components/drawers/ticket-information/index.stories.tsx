// @ts-nocheck
import { StoryObj, Meta } from '@storybook/react';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { getTestContainer } from '@common/inversion-container-test';
import { Provider as InversionProvider } from 'inversify-react';
import {
  TicketInformationDumb,
  TicketInformationDumbProps,
} from '@components/drawers/ticket-information/index.dumb';

export default {
  title: 'Components/Drawers/TicketInformation/TicketInformation',
  component: TicketInformationDumb,
} as Meta;

const appointmentGenerator = new AppointmentMockGenerator();
const appointment = appointmentGenerator.generateOne();

export const GridTemplate = () => <TicketInformationDumb />;

const props: TicketInformationDumbProps = {
  appointment,
};

const container = getTestContainer();

const Template = (args: TicketInformationDumbProps) => (
  <InversionProvider container={container}>
    <TicketInformationDumb {...args} />
  </InversionProvider>
);

type Story = StoryObj<TicketInformationDumbProps>;
export const Default: Story = Template.bind({});
Default.args = props;
