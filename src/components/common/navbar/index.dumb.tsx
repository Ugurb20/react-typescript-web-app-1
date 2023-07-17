import React from 'react';
import style from './inex.module.scss';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { RouteEntity } from '@quicker/routes';

export interface NavbarDumbProps {
	userImg?: string;
	storeName: string;
	activePage?: number;
	setActivePage?: (page: number) => void;
	pages: RouteEntity[];
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
					// @ts-ignore
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
