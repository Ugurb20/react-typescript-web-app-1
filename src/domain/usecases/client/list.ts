import { inject, injectable } from 'inversify';
import { UseCase } from '@common/use-case';
import { ClientListRequest } from '@domain/types/requests/client/list';
import { CustomerEntity } from '@domain/types/entities/customer';
import { ClientRepository } from '@domain/repositories/client';


@injectable()
export class ClientListUseCase implements UseCase<ClientListRequest, Promise<CustomerEntity[]>>{
	constructor(@inject(ClientRepository) private readonly repository: ClientRepository) {}

	call(parameters: ClientListRequest): Promise<CustomerEntity[]> {
		return this.repository.list(parameters);
	}

}
