import React from 'react';
import { BounceLoader } from 'react-spinners';
import styled from '@emotion/styled';


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1000;
`;

const Spinner = styled(BounceLoader)`
  color: #fa9700;
`;

interface LoadingOverlayProps {
  show: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ show }) => {
	if (!show) return null;

	return (
		<Overlay>
			<div data-testid={"loading-overlay"}>
				<Spinner size={150} />

			</div>
		</Overlay>
	);
};
