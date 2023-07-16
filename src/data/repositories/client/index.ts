import { ClientRepository } from '@domain/repositories/client';
import { inject, injectable } from 'inversify';
import { ClientRemoteDataSource } from '@data/datasources/client/index.remote';
import { ClientLocalDataSource } from '@data/datasources/client/index.local';
import { ClientListRequest } from '@domain/types/requests/client/list';
import { CustomerEntity } from '@domain/types/entities/customer';

@injectable()
export class ClientRepositoryImpl implements ClientRepository{
	constructor(
		@inject(ClientRemoteDataSource) private readonly remoteDataSource: ClientRemoteDataSource,
		@inject(ClientLocalDataSource) private readonly localDataSource: ClientLocalDataSource) {}

	list(params: ClientListRequest): Promise<CustomerEntity[]> {
		const localData = this.localDataSource.get(params);
		if (localData) {
			return Promise.resolve(localData);
		}
		return this.remoteDataSource.list(params).then((data) => {
			this.localDataSource.save(params, data);
			return data;
		});
	}
}
