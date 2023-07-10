import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { styled } from '@mui/system';

export interface SelectableButtonGroupDumbProps {
  buttonNames: string[];
  onSelect?: (buttonName: string) => void;
  value?: string | null;
}

const StyledButton = styled(Button)({
	background: 'white',
	color: 'black',
	'&.selected': {
		background: 'black',
		color: 'white',
	},
	height: 48,
	padding: '0 30px',
});

export const SelectableButtonGroupDumb: React.FC<
  SelectableButtonGroupDumbProps
> = ({ buttonNames, onSelect, value }) => {
	const handleClick = (buttonName: string) => {
		if (value !== buttonName) {
			onSelect && onSelect(buttonName);
		}
	};

	return (
		<ButtonGroup disableElevation variant="contained" aria-label="button group">
			{buttonNames.map(buttonName => (
				<StyledButton
					key={buttonName}
					onClick={() => handleClick(buttonName)}
					className={value === buttonName ? 'selected' : ''}
				>
					{buttonName}
				</StyledButton>
			))}
		</ButtonGroup>
	);
};
