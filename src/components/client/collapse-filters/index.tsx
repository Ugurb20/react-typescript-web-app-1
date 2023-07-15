import CollapseFiltersDumb, { CollapseFiltersDumbProps } from './index.dumb';
import { Range } from './index.dumb';
import React, { useState } from 'react';

export interface CollapseFiltersProps {
	max: number;
	min: number;
	step: number;
	suffix?: string;
	filterName?: string;
}

const CollapseFilters: React.FC<CollapseFiltersProps> = ({
	max,
	min,
	step,
	suffix,
	filterName = 'Filter Name',
}) => {
	const [selectedRanges, setSelectedRanges] = useState<Range[]>([]);
	const [maxRange, setMaxRange] = useState<number>(max);
	const [minRange, setMinRange] = useState<number>(min);

	const onChange = (newRange: Range) => {
		if (selectedRanges.includes(newRange)) {
			setSelectedRanges(() => {
				return selectedRanges.filter(el => el !== newRange);
			});
		} else {
			setSelectedRanges(prev => {
				return [...prev, newRange];
			});
		}
	};

	const onSearch = (minSearch: number | any, maxSearch: number | any) => {
		if (!(min || max)) return;
		if (minSearch) {
			if (min < minSearch) {
				const newMin = minSearch - ((minSearch - min) % step);
				setMinRange(newMin);
			} else {
				setMinRange(min);
			}
		}
		if (maxSearch) {
			if (max > maxSearch) {
				const newMax = maxSearch + ((max - maxSearch) % step);
				setMaxRange(newMax);
			} else {
				setMaxRange(max);
			}
		}
	};

	const props: CollapseFiltersDumbProps = {
		max: maxRange,
		min: minRange,
		step,
		selectedRanges,
		onChange,
		suffix,
		onSearch,
		filterName,
	};

	return <CollapseFiltersDumb {...props} />;
};

export default CollapseFilters;
