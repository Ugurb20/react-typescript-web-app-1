import React, { useEffect, useState } from 'react';
import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from '@mui/material';
import style from './index.module.scss';

export interface SelectProps {
  options: string[];
  label: string;
  onChange?: (option: string) => void;
}

const CustomSelect: React.FC<SelectProps> = ({ options, label, onChange }) => {
	const [selectedOption, setSelectedOption] = useState<string | undefined>();

	useEffect(() => {
		setSelectedOption(options[0] ?? '');
		onChange && onChange(options[0] ?? null);
	}, [options]);

	const handleChange = (event: SelectChangeEvent) => {
		const { value } = event.target;
		setSelectedOption(value as string);
		onChange && onChange(value as string);
	};

	return (
		<div className={style.dropdownMenu}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">{label}</InputLabel>
				{options.length && (
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectedOption ?? ''}
						label={label}
						onChange={handleChange}
					>
						{options.map((option, index) => (
							<MenuItem key={index} value={option}>
								{option}
							</MenuItem>
						))}
					</Select>
				)}
			</FormControl>
		</div>
	);
};

export default CustomSelect;
