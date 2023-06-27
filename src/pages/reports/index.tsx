import React from 'react';
import ReportsPageDumb, { ReportsPageDumbProps } from './index.dumb';

const ReportsPage: React.FC = () => {
	const props: ReportsPageDumbProps = {
		storeName: 'Royal Oaks',
	};

	return <ReportsPageDumb {...props} />;
};

export default ReportsPage;
