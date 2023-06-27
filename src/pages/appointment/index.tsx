import React from 'react';
import AppointmentPageDumb, { AppointmentPageDumbProps } from './index.dumb';

const AppointmentPage: React.FC = () => {
	const props: AppointmentPageDumbProps = {
		storeName: 'Royal Oaks',
	};

	return <AppointmentPageDumb {...props} />;
};

export default AppointmentPage;
