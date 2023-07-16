import { injectable } from 'inversify';
import { ClientListRequest } from '@domain/types/requests/client/list';
import { CustomerEntity } from '@domain/types/entities/customer';
import { LocalDataSource } from '@domain/interfaces/local-data-source';


@injectable()
export abstract class ClientLocalDataSource implements LocalDataSource {

	abstract get(params: ClientListRequest): CustomerEntity[] | null;

	abstract save(params: ClientListRequest, data: CustomerEntity[]): void;
}
