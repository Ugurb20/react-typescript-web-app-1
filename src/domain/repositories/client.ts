import { ClientListRequest } from '@domain/types/requests/client/list';
import { CustomerEntity } from '@domain/types/entities/customer';
import { Repository } from '@domain/repositories/repository';
import { injectable } from 'inversify';

@injectable()
export abstract class ClientRepository extends Repository {
	abstract list(params: ClientListRequest): Promise<CustomerEntity[]>;
}
