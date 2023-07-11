import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import { Provider as InversionProvider } from 'inversify-react';
import { getContainer } from '@common/inversion-container';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
	<App />
);

{
	/* <InversionProvider container={getContainer()}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</InversionProvider> */
}
