/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, {
	AxiosError,
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
} from 'axios';
import { inject, injectable } from 'inversify';
import { ApiUrl } from '@domain/types/common/api-url';
import { HttpClient } from './http-client';
import { ApiUrlSymbol } from '@domain/types/symbols';
import { TOKEN_EXPIRATION_TIME } from '@common/constants';

@injectable()
export class HttpClientImpl implements HttpClient {
	protected instance: AxiosInstance;

	protected authToken: string | null;

	constructor(@inject<ApiUrl>(ApiUrlSymbol) protected apiUrl: ApiUrl) {
		this.instance = axios.create({ baseURL: apiUrl.value });
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

	isTokenExpired(): boolean {
		const tokenExpiration = localStorage.getItem('tokenExpiration');
		const now = Date.now();
		return tokenExpiration ? now > Number(tokenExpiration) : true;
	}

	async login(email: string, password: string): Promise<void> {
		try {
			const response = await this.instance.post('/api/auth/customer/login', {
				email,
				password,
			});
			if (response.status === 200) {
				this.setAuthToken(response.data.token);
			}
		} catch {
			throw new Error('Authentication failed');
		}
	}

	async verify(): Promise<boolean> {
		if (!this.authToken) return false;
		try {
			const response = await this.instance.get('/api/auth/customer/verify', {
				headers: {
					Authorization: `Token ${this.authToken}`,
				},
			});
			return response.status === 200;
		} catch {
			return false;
		}
	}

	public setAuthToken(token: string): void {
		this.authToken = token;
		this.instance.defaults.headers.common['Authorization'] = `Token ${token}`;
		localStorage.setItem('authToken', token);
		localStorage.setItem('tokenExpiration', String(Date.now() + TOKEN_EXPIRATION_TIME));
	}

	public purgeAuthToken(): void {
		this.authToken = null;
		delete this.instance.defaults.headers.common['Authorization'];
		localStorage.removeItem('authToken');
	}

	get<Response = any>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<Response>> {
		return this.instance.get<Response>(url, config);
	}

	post<Request = any, Response = any>(
		url: string,
		data?: Request,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<Response>> {
		return this.instance.post<Response>(url, data, config);
	}

	put<Request = any, Response = any>(
		url: string,
		data?: Request,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<Response>> {
		return this.instance.put<Response>(url, data, config);
	}

	delete<Response = any>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<Response>> {
		return this.instance.delete<Response>(url, config);
	}

	patch<Request = any, Response = any>(
		url: string,
		data?: Request,
		config?: AxiosRequestConfig
	): Promise<AxiosResponse<Response>> {
		return this.instance.patch<Response>(url, data, config);
	}

	logout(): Promise<void> {
		this.purgeAuthToken();
		return Promise.resolve();
	}
}
