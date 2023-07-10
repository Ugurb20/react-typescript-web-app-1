import React from 'react';
import { Provider as InversionProvider } from 'inversify-react';
import { getTestContainer } from '@common/inversion-container-test';
import { AppWrapper } from '@components/utils/app-wrapper';
import { MemoryRouter } from 'react-router-dom';

export interface StorybookAppTemplateProps {
  children: React.ReactNode;
}
const container = getTestContainer();

export const StorybookAppTemplate: React.FC<StorybookAppTemplateProps> = ({
	children,
}) => {
	return (
		<MemoryRouter initialEntries={['/']}>
			<AppWrapper>
				<InversionProvider container={container}>{children}</InversionProvider>
			</AppWrapper>
		</MemoryRouter>
	);
};
