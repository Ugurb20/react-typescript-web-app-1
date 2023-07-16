import { ClientRemoteDataSource } from '@data/datasources/client/index.remote';
import { inject, injectable } from 'inversify';
import { CustomerEntity } from '@domain/types/entities/customer';
import { HttpClient } from '@common/http-client';
import { HttpClientSymbol } from '@domain/types/symbols';
import { ClientListRequest } from '@domain/types/requests/client/list';

@injectable()
export class ClientRemoteDataSourceImpl implements ClientRemoteDataSource {
	constructor(@inject(HttpClientSymbol) private readonly httpClient: HttpClient) {}

	async listClients(params: ClientListRequest): Promise<CustomerEntity[]> {
		const response = await this.httpClient.get('/api/scheduling/customers',{params});
		return response.data;
	}
}
