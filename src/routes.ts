import React, { lazy } from 'react';
import HomeIcon from '@components/common/icons/navbar/home-icon';
import { RouteNames } from '@quicker/route-names';

export interface RouteEntity {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  publicRoute?: boolean;
	icon: React.FC;
	name: string;
}

const HomePage = lazy(() => import('@pages/home'));

export const routes: RouteEntity[] = [
	{
		path: RouteNames.HOME,
		component: HomePage,
		icon: HomeIcon,
		name: 'Home',
	},
];
