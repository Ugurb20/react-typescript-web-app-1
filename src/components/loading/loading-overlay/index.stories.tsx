import React, { useState } from 'react';
import { LoadingOverlayProvider } from './context';
import { useLoadingOverlay } from './use-loading-overlay';
import { Meta, Story } from '@storybook/react/types-6-0';
import PageCard from '@components/cards/page-card/page-card';

export default {
  title: 'Components/Loading/LoadingOverlay', component: LoadingOverlayProvider,
} as Meta;

const MockComponent = () => {
  const [loading, setLoading] = useLoadingOverlay();

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
      <div onClick={toggleLoading}>
        <PageCard   />
      </div>
  );
};

const Template: Story = (args) => <LoadingOverlayProvider><MockComponent {...args} /></LoadingOverlayProvider>;
export const Default = Template.bind({});
Default.args = {

};
