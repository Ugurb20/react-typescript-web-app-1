import React, { useEffect, useState, useRef } from 'react';
import style from './index.module.scss';
import ArrowUpIcon from '@components/common/icons/client/arrow-up';
import SearchIcon from '@components/common/icons/client/search-icon';

export type Range = [number, number];

export interface CollapseFiltersDumbProps {
	min: number;
	max: number;
	step: number;
	selectedRanges: Range[];
	onChange: (range: Range) => void;
	toInfinit?: boolean;
	suffix?: string;
	onSearch: (minSearch: number | any, maxSearch: number | any) => void;
	filterName?: string;
}

const CollapseFiltersDumb: React.FC<CollapseFiltersDumbProps> = ({
	min,
	max,
	step,
	selectedRanges,
	onChange,
	toInfinit = false,
	suffix = '',
	onSearch,
	filterName = 'Filter Name',
}) => {
	const [displayedRange, setDisplayedRange] = useState<Range[]>([]);
	const [collapse, setCollapse] = useState<boolean>(false);

	const minRef = useRef<HTMLInputElement>(null);
	const maxRef = useRef<HTMLInputElement>(null);

	const setRanges = () => {
		console.log(max, min);
		const stepCount = (max - min) / step;
		setDisplayedRange([]);
		for (let i = 0; i < stepCount; i++) {
			if (min + (i + 1) * step > max) {
				setDisplayedRange(prev => {
					return [...prev, [min + i * step, max]];
				});
			} else {
				setDisplayedRange(prev => {
					return [...prev, [min + i * step, min + (i + 1) * step]];
				});
			}
		}
	};

	useEffect(() => {
		setRanges();
		console.log(max);
	}, [min, max]);

	return (
		<div className={style.filterWrapper}>
			<div
				className={style.filterName}
				onClick={() => {
					setCollapse(!collapse);
				}}
			>
				<h2>{filterName}</h2>
				<span className={`${style.arrow} ${collapse && style.arrowDown}`}>
					<ArrowUpIcon />
				</span>
			</div>
			<div
				className={`${style.filterBox} ${collapse && style.filterBoxCollapse}`}
			>
				<div className={style.controlRow}>
					<input
						type="number"
						id="myNumber"
						name="myNumber"
						min={min}
						max={max}
						placeholder="Least"
						ref={minRef}
					></input>
					<input
						type="number"
						id="myNumber"
						name="myNumber"
						min={min}
						max={max}
						placeholder="Most"
						ref={maxRef}
					></input>
					<button
						className={style.searchBtn}
						onClick={() =>
							onSearch(
								Number(minRef.current?.value),
								Number(maxRef.current?.value)
							)
						}
					>
						<SearchIcon />
					</button>
				</div>
				<div className={style.filters}>
					{displayedRange.map((range: Range, i) => {
						return (
							<div
								key={i}
								className={style.range}
								onClick={() => onChange(range)}
							>
								<span
									className={`${style.checkBox} ${
										selectedRanges.includes(range) && style.checkBoxActive
									}`}
								></span>
								{range[0]}
								{suffix} - {range[1]}
								{suffix}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CollapseFiltersDumb;
