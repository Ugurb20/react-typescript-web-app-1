import React from 'react';
import styles from './index.module.scss';

export interface CheckboxItemDumbProps {
	checked: boolean;
	onChecked?: (checked: boolean) => void;
	label: string;
}

export const CheckboxItemDumb : React.FC<CheckboxItemDumbProps> = ({
	checked,
	onChecked,
	label
																																	 }) => {

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			onChecked && onChecked(e.target.checked);
	}


	return <div data-testid={'checkbox-item'} className={styles.checkboxItem}>
		<input data-testid={'checkbox-item-input'} className={styles.checkboxItemInput} type={'checkbox'} checked={checked} onChange={onChange}/>
		<label data-testid={'checkbox-item-label'} className={styles.checkboxItemLabel}>{label}</label>
	</div>
}
