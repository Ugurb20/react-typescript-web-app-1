import React, { lazy } from 'react';

export interface RouteEntity {
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.LazyExoticComponent<React.ComponentType<any>>;
  publicRoute?: boolean;
}

const HomePage = lazy(() => import('@pages/home'));

export const routes: RouteEntity[] = [
	{
		path: '/home',
		component: HomePage,
	},
];
