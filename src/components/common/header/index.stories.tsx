import React from 'react';
import {
  AppHeaderDumb,
  AppHeaderDumbProps,
} from '@components/common/header/index.dumb';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Common/AppHeader',
  component: AppHeaderDumb,
} as Meta;

type Story = StoryObj<AppHeaderDumbProps>;

export const Default: Story = {
  args: {},
};
