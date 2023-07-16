import { inject, injectable } from 'inversify';
import { ClientListRequest } from '@domain/types/requests/client/list';
import { CustomerEntity } from '@domain/types/entities/customer';
import { ClientLocalDataSource } from '@data/datasources/client/index.local';
import { HashedSessionStorage } from '@common/hashed-session-storage';


@injectable()
export class ClientLocalDataSourceImpl implements ClientLocalDataSource {
	constructor(@inject(HashedSessionStorage) private readonly storage: HashedSessionStorage) {}

	save(params: ClientListRequest, data: CustomerEntity[]): void {
		this.storage.setItem(params, data);
	}

	get(params: ClientListRequest): CustomerEntity[] | null {
		return this.storage.getItem(params);
	}
}
