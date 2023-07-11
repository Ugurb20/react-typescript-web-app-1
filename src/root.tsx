import React from 'react';
import { getContainer } from '@common/inversion-container';
import { Provider as InversionProvider } from 'inversify-react';
import { LoadingOverlayProvider } from '@components/loading/loading-overlay/context';
import { TicketInformationProvider } from '@components/drawers/ticket-information/index.context';

export interface RootProps {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children }) => {
	return (
		<InversionProvider container={getContainer()}>
			<TicketInformationProvider>
				<LoadingOverlayProvider>{children}</LoadingOverlayProvider>
			</TicketInformationProvider>
		</InversionProvider>
	);
};

export default Root;
