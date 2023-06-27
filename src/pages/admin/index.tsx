import React from 'react';
import AdminPageDumb, { AdminPageDumbProps } from './index.dumb';

const AdminPage: React.FC = () => {
	const props: AdminPageDumbProps = {
		storeName: 'Royal Oaks',
	};

	return <AdminPageDumb {...props} />;
};

export default AdminPage;
