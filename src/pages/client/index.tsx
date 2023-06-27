import React from 'react';
import ClientPageDumb, { ClientPageDumbProps } from './index.dumb';

const ClientPage: React.FC = () => {
	const props: ClientPageDumbProps = {
		storeName: 'Royal Oaks',
	};

	return <ClientPageDumb {...props} />;
};

export default ClientPage;
