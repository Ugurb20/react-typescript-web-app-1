import { CheckboxItemDumb } from '@components/inputs/checkbox-item/index.dumb';
import React from 'react';

export interface CheckboxItemProps{
	label: string;
	checked?: boolean;
	onChecked?: (checked: boolean) => void;
}

export const CheckboxItem : React.FC<CheckboxItemProps> = ({
	label,
	checked = false,
	onChecked
}) => {

	const onChange = (checked: boolean) => {
		onChecked && onChecked(checked);
	}

	return <CheckboxItemDumb checked={checked} label={label} onChecked={onChange}/>
}


