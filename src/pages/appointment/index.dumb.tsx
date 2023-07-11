import React from 'react';

export interface AppointmentPageDumbProps {
	storeName?: string;
}

const AppointmentPageDumb: React.FC<AppointmentPageDumbProps> = () => {
	return (
		<div>
			<h1>Appointment Page</h1>
		</div>
	);
};

export default AppointmentPageDumb;
