import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import NavbarDumb, { NavbarDumbProps } from './index.dumb';
import HomeIcon from '../icons/navbar/home-icon';
import '../../../../src/index.css';

export default {
	title: 'Navbar',
	component: NavbarDumb,
} as Meta;

const Template: StoryFn<NavbarDumbProps> = (args: any) => {
	const [navExpanded, setNavExpanded] = React.useState(false);

	return (
		<div
			style={{
				width: '100%',
				height: '100vh',
				backgroundColor: 'black',
				display: 'flex',
			}}
		>
			<NavbarDumb
				{...args}
				navExpanded={navExpanded}
				setNavExpanded={setNavExpanded}
			/>
			<div
				style={{
					flexGrow: 1,
					height: '100%',
					backgroundColor: '#F3F4F6',
				}}
			></div>
		</div>
	);
};

export const DefaultNavbar = Template.bind({});
DefaultNavbar.args = {
	userImg: 'https://example.com/user.jpg',
	storeName: 'Royal Oak',
	activePage: 0,
	setActivePage: (page: any) => {
		console.log(`Page: ${page}`);
	},
	pages: [
		{ name: 'Home', icon: HomeIcon },
		{ name: 'Home', icon: HomeIcon },
		{ name: 'Home', icon: HomeIcon },
	],
};
