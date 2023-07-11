import React from 'react';
import { Box } from '@mui/material';
import style from './index.module.scss';

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel: React.FC<TabPanelProps> = ({
	children,
	value,
	index,
}) => {
	return (
		<div role="tabpanel" className={style.tabPanel} hidden={value !== index}>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
};
