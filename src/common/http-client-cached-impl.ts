import { HttpClientImpl } from '@common/http-client-impl';
import { inject } from 'inversify';
import { ApiUrl } from '@domain/types/common/api-url';
import { ApiUrlSymbol } from '@domain/types/symbols';
import axios, { AxiosError } from 'axios';
import { setupCache } from 'axios-cache-adapter';
/* eslint-disable @typescript-eslint/no-explicit-any */

export class HttpClientCachedImpl extends HttpClientImpl {
	constructor(@inject<ApiUrl>(ApiUrlSymbol) protected apiUrl: ApiUrl) {
		super(apiUrl);
		const cache = setupCache({
			maxAge: 24 * 60 * 60 * 1000, // Cache duration: 24 hours in milliseconds
			exclude: {
				query: false,
			},
		});
		this.instance = axios.create({
			baseURL: apiUrl.value,
			adapter: cache.adapter,
		});
		this.authToken = localStorage.getItem('authToken');

		if (this.authToken) {
			this.instance
				.get('/api/auth/customer/verify', {
					headers: {
						Authorization: `Token ${this.authToken}`,
					},
				})
				.then(() => {
					this.instance.defaults.headers.common[
						'Authorization'
					] = `Token ${this.authToken}`;
				})
				.catch(() => {
					this.authToken = null;
					localStorage.removeItem('authToken');
				});
		}

		this.instance.interceptors.response.use(
			(response: any) => {
				return response.status === 401 ? undefined : response;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);
	}
}
