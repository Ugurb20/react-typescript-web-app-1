import React from 'react';
export interface OpacityProps {
  alpha: number;
  children: React.ReactNode;
}

export const Opacity = ({ alpha, children }: OpacityProps) => {
	return <div style={{ opacity: alpha }}>{children}</div>;
};
