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
				value={value}
				label={label}
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

