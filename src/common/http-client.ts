/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { injectable } from 'inversify';

@injectable()
export abstract class HttpClient {
  abstract get<Response = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>>;

  abstract post<Request = any, Response = any>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>>;

  abstract put<Request = any, Response = any>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>>;

  abstract delete<Response = any>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>>;

  abstract patch<Request = any, Response = any>(
    url: string,
    data?: Request,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>>;

  abstract login(username?: string, password?: string): Promise<any>;

  abstract verify(): Promise<boolean>;

  abstract logout(): Promise<void>;

  abstract setAuthToken(token: string): void;
}
