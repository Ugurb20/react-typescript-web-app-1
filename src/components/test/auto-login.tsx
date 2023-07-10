import React, { useState, useEffect } from 'react';
import { HttpClient } from '@common/http-client';
import { useInjection } from 'inversify-react';
import SpinnerOverlay from '@components/loading/spinner-overlay';
import { useNavigate } from 'react-router';
import { CredentialsSymbol, HttpClientSymbol } from '@domain/types/symbols';
import { Credentials } from '@domain/types/test/credentials';

interface AutoLoginProps {
  children: React.ReactNode;
}

const AutoLogin = ({ children }: AutoLoginProps) => {
	const client = useInjection<HttpClient>(HttpClientSymbol);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const { username, password } = useInjection(CredentialsSymbol) as Credentials;
	const navigate = useNavigate();

	useEffect(() => {
		setIsLoggedIn(true);
		client
			.login(username, password)
			.then(() => {
				console.log('Signed in successfully');
				setIsLoggedIn(true);
			})
			.catch(console.error);
	}, []);

	return isLoggedIn ? <>{children}</> : <SpinnerOverlay />;
};

export default AutoLogin;
