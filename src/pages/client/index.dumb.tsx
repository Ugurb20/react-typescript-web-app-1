import React from 'react';

export interface ClientPageDumbProps {
	storeName?: string;
}

const ClientPageDumb: React.FC<ClientPageDumbProps> = () => {
	return (
		<div>
			<h1>Client Page</h1>
		</div>
	);
};

export default ClientPageDumb;
