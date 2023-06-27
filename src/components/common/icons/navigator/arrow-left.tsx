import React from 'react';

const ArrowLeft: React.FC = () => {
	return (
		<>
			<svg
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3.75 10H16.875"
					stroke="#9CA3AF"
					strokeWidth="1.5"
					strokeLinecap="round"
				/>
				<path
					d="M8.125 5L3.125 10L8.125 15"
					stroke="#9CA3AF"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</>
	);
};

export default ArrowLeft;
