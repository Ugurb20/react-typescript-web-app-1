import React from 'react';
import style from './index.module.scss';
import Navbar from '../navbar/index';
import HomeIcon from '../icons/navbar/home-icon';
import ArrowLeft from '../icons/navigator/arrow-left';
import ArrowRight from '../icons/navigator/arrow-right';
import ClockIcon from '../icons/navigator/clock-icon';

export interface PageWrapperProps {
	children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
	return (
		<div className={style.pageWrapper}>
			<Navbar />
			<div className={style.pageLeft}>
				<div className={style.pageNavigator}>
					<ArrowLeft />
					<ArrowRight />
					<ClockIcon />
				</div>
				{children}
			</div>
		</div>
	);
};

export default PageWrapper;
