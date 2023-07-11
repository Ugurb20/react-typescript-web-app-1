import { BranchEntity } from '@domain/types/entities/branch';
import { useEffect, useState } from 'react';
import { BranchGetAllUseCase } from '@domain/usecases/branch/get-all';
import { useInjection } from 'inversify-react';
import { BranchUpdateUseCase } from '@domain/usecases/branch/update';
import { BranchUpdateRequest } from '@domain/types/requests/branch/update';

export interface BranchesHook {
  branches: BranchEntity[];
  setBranch: (branch: BranchEntity) => void;
}

export const useBranches = (): BranchesHook => {
	const [branches, setBranches] = useState<BranchEntity[]>([]);
	const getAllBranches = useInjection(BranchGetAllUseCase);
	const updateBranch = useInjection(BranchUpdateUseCase);

	useEffect(() => {
		getAllBranches.call().then(branches => {
			setBranches(branches);
		});
	}, []);

	const setBranch = (branch: BranchEntity) => {
		const newBranches = branches.map(b => {
			if (b.id === branch.id) {
				return branch;
			}
			return b;
		});

		updateBranch.call(branch as BranchUpdateRequest).catch(() => {
			setBranches(branches);
		});

		setBranches(newBranches);
	};

	return {
		branches,
		setBranch,
	};
};
