// @ts-nocheck
import { StoryObj, Meta } from '@storybook/react';
import { TicketInformationHeaderDumb } from '@components/drawers/ticket-information/components/header/index.dumb';

export default {
  title: 'Components/Drawers/TicketInformation/Header',
  component: TicketInformationHeaderDumb,
} as Meta;

const Template: StoryObj<{}> = args => (
  <TicketInformationHeaderDumb {...args} />
);

export const Default = Template.bind({});
