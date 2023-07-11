// @ts-nocheck
import { StoryObj, Meta } from '@storybook/react';
import { AppointmentMockGenerator } from '@test/__mocks__/types/entities/appointment';
import { getTestContainer } from '@common/inversion-container-test';
import { Provider as InversionProvider } from 'inversify-react';
import ClientPetInfoDumb, {
  ClientPetInfoDumbProps,
} from '@components/drawers/ticket-information/components/client-pet-info/index.dumb';

export default {
  title: 'Components/Drawers/TicketInformation/ClientPetInfo',
  component: ClientPetInfoDumb,
} as Meta;

const appointmentGenerator = new AppointmentMockGenerator();
const appointment = appointmentGenerator.generateOne();

const props: ClientPetInfoDumbProps = {
  appointment,
};

const container = getTestContainer();

const Template = (args: ClientPetInfoDumbProps) => (
  <InversionProvider container={container}>
    <ClientPetInfoDumb {...args} />
  </InversionProvider>
);

type Story = StoryObj<ClientPetInfoDumbProps>;
export const Default: Story = Template.bind({});
Default.args = props;
