import React from 'react'
import { SearchTextFieldDumb } from '@components/inputs/search-text-field/index.dumb';

export interface SearchTextFieldProps {
	onChanged: (value: string) => void
	label: string
	initialValue: string
}

export const SearchTextField: React.FC<SearchTextFieldProps> = ({
	onChanged,
	label,
	initialValue
}) => {
	const [value, setValue] = React.useState(initialValue);
	const handleChanged = (value: string) => {
		setValue(value);
		onChanged(value);
	}
	return <SearchTextFieldDumb onChanged={handleChanged} label={label} value={value}/>
}
