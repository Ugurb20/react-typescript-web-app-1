import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationPanelDumb } from '@components/common/navigation-panel/index.dumb'; // Import the config from where it's defined

export interface NavigationPanelProps {
  collapsed?: boolean;
}

export const NavigationPanel: React.FC<NavigationPanelProps> = ({
	collapsed = false,
}) => {
	const navigate = useNavigate();

	return <NavigationPanelDumb navigate={navigate} collapsed={collapsed} />;
};
