import React, { useState } from 'react';
import NavbarDumb, { NavbarDumbProps } from './index.dumb';
import { routes } from '@quicker/routes';

const Navbar: React.FC = () => {
	const [navExpanded, setNavExpanded] = useState(false);

	const props: NavbarDumbProps = {
		storeName: 'Royal Oaks',
		pages: routes,
		navExpanded,
		setNavExpanded,
	};

	return <NavbarDumb {...props} />;
};

export default Navbar;
