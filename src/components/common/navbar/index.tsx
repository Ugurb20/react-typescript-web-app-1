import React from 'react';
import NavbarDumb, { NavbarDumbProps } from './index.dumb';
import HomeIcon from '../icons/navbar/home-icon';

const Navbar: React.FC = () => {
	const [navExpanded, setNavExpanded] = React.useState(false);

	const props: NavbarDumbProps = {
		storeName: 'Royal Oaks',
		pages: [
			{ name: 'Home', icon: HomeIcon },
			{ name: 'Home', icon: HomeIcon },
			{ name: 'Home', icon: HomeIcon },
		],
		navExpanded,
		setNavExpanded,
	};

	return <NavbarDumb {...props} />;
};

export default Navbar;
