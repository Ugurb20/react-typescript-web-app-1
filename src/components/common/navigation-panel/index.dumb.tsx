import React from 'react';
import {
	Box,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Tooltip,
} from '@mui/material';
import { config } from './config';

export interface NavigationPanelDumbProps {
  navigate?: (path: string) => void;
  collapsed?: boolean;
}

export const NavigationPanelDumb: React.FC<NavigationPanelDumbProps> = ({
	navigate,
	collapsed = false,
}) => {
	const handleNavigation = (path: string) => {
		navigate && navigate(path);
	};

	return (
		<Box
			height={'100%'}
			display="flex"
			flexDirection="column"
			alignItems="center"
		>
			<List>
				{config.map(({ icon, path, name }, index) => (
					<Tooltip title={name} key={index}>
						<ListItem
							sx={{
								width: '56px',
							}}
							button
							key={index}
							onClick={() => handleNavigation(path)}
						>
							<ListItemIcon>{icon}</ListItemIcon>
							{!collapsed && <ListItemText primary={name} />}
						</ListItem>
					</Tooltip>
				))}
			</List>
		</Box>
	);
};
