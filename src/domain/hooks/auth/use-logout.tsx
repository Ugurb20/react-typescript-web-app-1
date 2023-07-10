import { useInjection } from 'inversify-react';
import { HttpClient } from '@common/http-client';
import { HttpClientSymbol } from '@domain/types/symbols';

export const useLogout = () => {
	const client = useInjection<HttpClient>(HttpClientSymbol);
	return () => {
		client.purgeAuthToken();
		localStorage.clear();
		sessionStorage.clear();
		indexedDB.databases().then(function (databases) {
			for (const database of databases) {
				if (!database.name) continue;
				if (window.indexedDB.deleteDatabase(database.name)) continue;
			}
		});
	};
};
