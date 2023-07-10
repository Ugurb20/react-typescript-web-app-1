// @ts-nocheck
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AppWrapper } from '@components/utils/app-wrapper';
import {
  NavigationPanelDumb,
  NavigationPanelDumbProps,
} from '@components/common/navigation-panel/index.dumb';

export default {
  title: 'Components/Common/NavigationPanel',
  component: NavigationPanelDumb,
} as Meta;

type Story = StoryObj<NavigationPanelDumbProps>;

export const Template = (args: NavigationPanelDumbProps) => (
  <AppWrapper>
    <NavigationPanelDumb {...args} />
  </AppWrapper>
);

export const Default: Story = Template.bind({});
Default.args = {
  navigate: console.log,
};

export const Collapsed: Story = Template.bind({});
Collapsed.args = {
  navigate: console.log,
  collapsed: true,
};
