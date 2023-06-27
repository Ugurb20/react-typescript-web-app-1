import React from 'react';
import HomePageDumb, { HomePageDumbProps } from './index.dumb';

const HomePage: React.FC = () => {
	const props: HomePageDumbProps = {
		storeName: 'Royal Oaks',
	};

	return <HomePageDumb {...props} />;
};

export default HomePage;
