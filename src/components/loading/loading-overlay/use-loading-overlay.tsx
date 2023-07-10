import { useLoadingOverlayContext } from './context';

export const useLoadingOverlay = (): [boolean, (loading: boolean) => void] => {
	const { loading, setLoading } = useLoadingOverlayContext();
	return [loading, setLoading];
};
