import DropdownMenu from '@components/inputs/dropdown/index.dumb';
import React from 'react';
import { useBranches } from '@domain/hooks/branch/use-branches';
import { useHomePageContext } from '@pages/home/context';

export const BranchSelect = () => {
	const { branches } = useBranches();
	const { setBranch, branch } = useHomePageContext();

	const handleOnChange = (value: string) => {
		const selectedBranch = branches.find(branch => branch.name === value);
		if (!selectedBranch || !setBranch) return;
		setBranch(selectedBranch);
	};

	return (
		<DropdownMenu
			label={''}
			options={branches.map(branch => branch.name)}
			onChange={handleOnChange}
		/>
	);
};
