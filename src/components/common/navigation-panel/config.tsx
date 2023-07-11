import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import PetsIcon from '@mui/icons-material/Pets';
import EventIcon from '@mui/icons-material/Event';
import ReportIcon from '@mui/icons-material/Report';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export interface NavigationConfig {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export const config: NavigationConfig[] = [
	{
		name: 'Home',
		path: '/home',
		icon: <HomeIcon />,
	},
	{
		name: 'Client',
		path: '/client',
		icon: <PeopleIcon />,
	},
	{
		name: 'Pet',
		path: '/pet',
		icon: <PetsIcon />,
	},
	{
		name: 'Appointments',
		path: '/appointments',
		icon: <EventIcon />,
	},
	{
		name: 'Reports',
		path: '/reports',
		icon: <ReportIcon />,
	},
	{
		name: 'Admin',
		path: '/admin',
		icon: <AdminPanelSettingsIcon />,
	},
];
