import { useInjection } from 'inversify-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HttpClient } from '@common/http-client';
import { RouteNames } from '@quicker/route-names';
import { useLogout } from '@domain/hooks/auth/use-logout';
import { HttpClientSymbol } from '@domain/types/symbols';

export interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
	children,
}: PrivateRouteProps) => {
	const client = useInjection<HttpClient>(HttpClientSymbol);
	const navigate = useNavigate();
	const logout = useLogout();
	useEffect(() => {
		if (client.isTokenExpired()) {
			navigate(RouteNames.LOGIN);
			logout();
		}
	}, []);

	if (client.isTokenExpired()) {
		return null;
	}

	return <>{children}</>;
};
