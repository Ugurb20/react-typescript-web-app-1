import React from 'react';
import {render, screen} from '@testing-library/react';
import { CheckboxItemDumb } from '@components/inputs/checkbox-item/index.dumb';

describe('CheckboxItemDumb', () => {
	it('should be defined', () => {
		expect(CheckboxItemDumb).toBeDefined();
	});
	it('if checked is true and clicked to checkbox, onChecked should be called with false.', () => {
		const onChecked = jest.fn();
		render(<CheckboxItemDumb checked={true} label={'Checkbox Item'} onChecked={onChecked}/>);
		const checkboxItemInput = screen.getByTestId('checkbox-item-input');
		checkboxItemInput.click();
		expect(onChecked).toHaveBeenCalledWith(false);
	});
	it('if checked is false and clicked to checkbox, onChecked should be called with true.', () => {
		const onChecked = jest.fn();
		render(<CheckboxItemDumb checked={false} label={'Checkbox Item'} onChecked={onChecked}/>);
		const checkboxItemInput = screen.getByTestId('checkbox-item-input');
		checkboxItemInput.click();
		expect(onChecked).toHaveBeenCalledWith(true);
	});
	it('label should be visible and equal to "Checkbox Item"', () => {
		const {getByText} = render(<CheckboxItemDumb checked={false} label={'Checkbox Item'} />);
		const item = getByText('Checkbox Item');
		expect(item).toBeTruthy();
	});
});
