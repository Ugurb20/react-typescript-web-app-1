import React from 'react';
import style from './index.module.scss';
export interface AppWrapperProps {
  children?: React.ReactNode;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
	return <div className={style.appWrapper}>{children}</div>;
};
