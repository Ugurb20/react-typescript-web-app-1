import { injectable } from 'inversify';
import { RemoteDataSource } from '@domain/interfaces/remote-data-source';
import { CustomerEntity } from '@domain/types/entities/customer';
import { ClientListRequest } from '@domain/types/requests/client/list';


@injectable()
export abstract class ClientRemoteDataSource implements RemoteDataSource {

	abstract listClients(params: ClientListRequest): Promise<CustomerEntity[]>;

}
