import React from 'react';
import style from './index.module.scss';
import { AppHeaderDumb } from '@components/common/header/index.dumb';
import { HomeDashboard } from '@pages/home/components/dashboard';
import { NavigationPanel } from '@components/common/navigation-panel';

export interface HomePageDumbProps {
  date?: Date;
}

export const HomePageDumb: React.FC<HomePageDumbProps> = ({
	date = new Date(),
}) => {
	return (
		<div className={style.gridContainer}>
			<div className={style.navigationPanel}>
				<NavigationPanel collapsed={true} />
			</div>
			<div className={style.header}>
				<AppHeaderDumb />
			</div>
			<div className={style.dashboard}>
				<HomeDashboard />
			</div>
		</div>
	);
};
