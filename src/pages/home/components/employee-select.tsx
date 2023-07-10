import DropdownMenu from '@components/inputs/dropdown/index.dumb';
import React from 'react';

export const EmployeeSelect = () => {
	//const { branches } = useBranches();
	const branches = [{ name: 'employee1' }, { name: 'employee2' }];
	return (
		<DropdownMenu label={''} options={branches.map(branch => branch.name)} />
	);
};
