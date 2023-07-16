/*
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from './index.module.scss'
import { InputAdornment, TextField } from '@mui/material';
export interface SearchTextFieldDumbProps {
	onChanged: (value: string) => void
	label: string
	value: string
}

export const SearchTextFieldDumb: React.FC<SearchTextFieldDumbProps> = ({
	onChanged,
	label,
	value
}) => {

	const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChanged(e.target.value)
	}

	return (
		<div className={styles.container} data-testid={'search-text-field-container'}>
			<TextField
				placeholder={label}
				value={value}
				onChange={handleChanged}
				variant="outlined"
				InputProps={{
					className: styles.input,
					endAdornment: <InputAdornment position="end">
						<SearchIcon />
					</InputAdornment>
				}}
			/>
		</div>
	)
}


 */
// Path: src/components/inputs/search-text-field/index.spec.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { SearchTextFieldDumb } from '@components/inputs/search-text-field/index.dumb';
import { fireEvent, render } from '@testing-library/react';

describe("SearchTextFieldDumb", () => {
	it("should be defined",()=>{
		expect(SearchTextFieldDumb).toBeDefined();
	});
	it("should show the label, when text is empty",()=>{
		const onChanged = jest.fn();
		const { getByTestId } = render(<SearchTextFieldDumb label="Search" value="" onChanged={onChanged} />);
		const node = getByTestId('search-text-field-container');
		expect(node).toHaveTextContent('Search');
	});
});

