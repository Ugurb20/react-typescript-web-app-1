import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/home'));
const AdminPage = lazy(() => import('./pages/admin'));
const AppointmentPage = lazy(() => import('./pages/appointment'));
const ClientPage = lazy(() => import('./pages/client'));
const ReportsPage = lazy(() => import('./pages/reports'));

import HomeIcon from '@components/common/icons/navbar/home-icon';
import AdminIcon from '@components/common/icons/navbar/admin-icon';
import AppointmentIcon from '@components/common/icons/navbar/appointment-icon';
import ClientIcon from '@components/common/icons/navbar/client-icon';
import ReportsIcon from '@components/common/icons/navbar/reports-icon';

export const routes = [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/admin',
		component: AdminPage,
	},
	{
		path: '/appointment',
		component: AppointmentPage,
	},
	{
		path: '/client',
		component: ClientPage,
	},
	{
		path: '/reports',
		component: ReportsPage,
	},
];

export const routeNames = [
	{
		path: '/',
		name: 'Home',
		icon: HomeIcon,
	},
	{
		path: '/admin',
		name: 'Admin',
		icon: AdminIcon,
	},
	{
		path: '/appointment',
		name: 'Appointment',
		icon: AppointmentIcon,
	},
	{
		path: '/client',
		name: 'Client & Pet',
		icon: ClientIcon,
	},
	{
		path: '/reports',
		name: 'Reports',
		icon: ReportsIcon,
	},
];
