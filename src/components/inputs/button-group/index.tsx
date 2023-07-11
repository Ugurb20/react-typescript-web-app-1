import React from 'react';
import { SelectableButtonGroupDumb } from '@components/inputs/button-group/index.dumb';

export interface SelectableButtonGroupProps {
  buttonNames: string[];
  onSelect?: (buttonName: string) => void;
}

export const SelectableButtonGroup: React.FC<SelectableButtonGroupProps> = ({
	buttonNames = [],
	onSelect,
}) => {
	const [selectedButton, setSelectedButton] = React.useState<string | null>(
		null
	);

	const handleSelect = (buttonName: string) => {
		if (selectedButton !== buttonName) {
			setSelectedButton(buttonName);
			onSelect && onSelect(buttonName);
		}
	};

	return (
		<SelectableButtonGroupDumb
			buttonNames={buttonNames}
			onSelect={handleSelect}
			value={selectedButton}
		/>
	);
};
