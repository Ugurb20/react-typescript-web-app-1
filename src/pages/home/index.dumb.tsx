import React from 'react';

export interface HomePageDumbProps {
	storeName?: string;
}

const HomePageDumb: React.FC<HomePageDumbProps> = () => {
	return (
		<div>
			<h1>Home Page</h1>
		</div>
	);
};

export default HomePageDumb;
