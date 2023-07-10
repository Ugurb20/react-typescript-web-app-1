import React from 'react';
import { EmployeeEntity } from '@domain/types/entities/employee';
import { BranchEntity } from '@domain/types/entities/branch';

export interface HomePageContextProps {
  date: Date;
  employee?: EmployeeEntity | null;
  branch?: BranchEntity | null;
  setDate?: React.Dispatch<React.SetStateAction<Date>>;
  setEmployee?: React.Dispatch<React.SetStateAction<EmployeeEntity | null>>;
  setBranch?: React.Dispatch<React.SetStateAction<BranchEntity | null>>;
  onDateChange?: (date: Date) => void;
  onEmployeeChange?: (employee: EmployeeEntity | null) => void;
  onBranchChange?: (branch: BranchEntity | null) => void;
}

export const HomePageContext = React.createContext<HomePageContextProps>({
	date: new Date(),
	employee: null,
	branch: null,
});

export interface HomePageContextProviderProps extends HomePageContextProps {
  children: React.ReactNode;
}
export const HomePageContextProvider: React.FC<
  HomePageContextProviderProps
> = ({
	children,
	date = new Date(),
	employee = null,
	onDateChange,
	onEmployeeChange,
	onBranchChange,
}) => {
	const [dateState, setDateState] = React.useState<Date>(date);
	const [employeeState, setEmployeeState] =
    React.useState<EmployeeEntity | null>(null);
	const [branchState, setBranchState] = React.useState<BranchEntity | null>(
		null
	);

	const handleSetDate = (date: Date) => {
		setDateState(date);
		onDateChange && onDateChange(date);
	};

	const handleSetEmployee = (employee: EmployeeEntity | null) => {
		setEmployeeState(employee);
		onEmployeeChange && onEmployeeChange(employee);
	};

	const handleSetBranch = (branch: BranchEntity | null) => {
		setBranchState(branch);
		onBranchChange && onBranchChange(branch);
	};

	const homePageContext = {
		date: dateState,
		employee: employeeState,
		branch: branchState,
		setDate: handleSetDate,
		setEmployee: handleSetEmployee,
		setBranch: handleSetBranch,
	} as HomePageContextProps;

	return (
		<HomePageContext.Provider value={homePageContext}>
			{children}
		</HomePageContext.Provider>
	);
};

export const useHomePageContext = () => {
	const context = React.useContext(HomePageContext);

	if (context === undefined) {
		throw new Error(
			'useHomePageContext must be used within a HomePageContextProvider'
		);
	}

	return context;
};
