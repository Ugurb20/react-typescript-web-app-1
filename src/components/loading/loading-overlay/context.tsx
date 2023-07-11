import React, { createContext, useContext, useState } from 'react';
import { LoadingOverlay } from './overlay';

interface LoadingOverlayContextValue {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const LoadingOverlayContext = createContext<LoadingOverlayContextValue | undefined>(undefined);

export interface LoadingOverlayProviderProps {
  children: React.ReactNode;
}

export const LoadingOverlayProvider: React.FC<LoadingOverlayProviderProps> = ({ children } : LoadingOverlayProviderProps) => {
	const [loading, setLoading] = useState(false);

	return (
		<LoadingOverlayContext.Provider value={{ loading, setLoading }}>
			<LoadingOverlay show={loading} />
			{children}
		</LoadingOverlayContext.Provider>
	);
};

export const useLoadingOverlayContext = (): LoadingOverlayContextValue => {
	const context = useContext(LoadingOverlayContext);
	if (!context) {
		throw new Error('useLoadingOverlayContext must be used within a LoadingOverlayProvider');
	}
	return context;
};
