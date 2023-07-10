import React from 'react';
import style from './index.module.scss';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import HistoryIcon from '@mui/icons-material/History';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Fab } from '@mui/material';

export interface AppHeaderDumbProps {
  onBack: () => void;
}

export const AppHeaderDumb = () => {
	const sx = {
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: 'transparent',
		},
		boxShadow: 'none',
		outline: 'none',
		'&:active': {
			boxShadow: 'none',
			outline: 'none',
		},
	};

	return (
		<div className={style.appHeader}>
			<div className={style.appHeader__leftIcons}>
				<Fab sx={sx} size={'small'}>
					<WestIcon />
				</Fab>
				<Fab sx={sx} size={'small'}>
					<EastIcon />
				</Fab>
				<Fab sx={sx} size={'small'}>
					<HistoryIcon />
				</Fab>
			</div>
			<div className={style.appHeader__rightIcons}>
				<Fab sx={sx} size={'small'}>
					<HelpOutlineIcon />
				</Fab>
			</div>
		</div>
	);
};
