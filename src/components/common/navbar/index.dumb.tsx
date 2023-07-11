import React from 'react';
import style from './inex.module.scss';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

interface Page {
	name: string;
	icon: React.FC;
	path: string;
}

export interface NavbarDumbProps {
	userImg?: string;
	storeName: string;
	activePage?: number;
	setActivePage?: (page: number) => void;
	pages: Page[];
	navExpanded: boolean;
	setNavExpanded: (expanded: boolean) => void;
}

const NavbarDumb: React.FC<NavbarDumbProps> = ({
	storeName,
	pages,
	setNavExpanded,
	navExpanded,
}) => {
	return (
		<nav
			className={`${style.navBar} ${navExpanded || style.navBarCollapse}`}
			onClick={() => setNavExpanded(!navExpanded)}
		>
			<div className={style.navBarTop}>
				{/* 				<img src={userImg} alt="Active employee profile"></img>
				 */}
				<Avatar round={true} size="50px" />
				<h3 className={style.light}>Store</h3>
				<h3>{storeName}</h3>
			</div>
			<div className={style.navBarBottom}>
				{pages.map((page, ind) => {
					return (
						<div key={ind} className={style.pageItem}>
							<Link to={page.path}>
								<page.icon />
								<h3>{page.name}</h3>
							</Link>
						</div>
					);
				})}
			</div>
		</nav>
	);
};

export default NavbarDumb as React.FC<NavbarDumbProps>;
