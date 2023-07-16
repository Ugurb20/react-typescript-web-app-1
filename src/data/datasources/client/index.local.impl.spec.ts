import { Container } from 'inversify';
import { HashedSessionStorage } from '@common/hashed-session-storage';
import { getTestContainer } from '@common/inversion-container-test';
import { ClientLocalDataSource } from '@data/datasources/client/index.local';

describe('ClientLocalDataSourceImpl', () => {
	let clientLocalDataSourceImpl: ClientLocalDataSource;
	let storage: HashedSessionStorage;
	let container: Container;
	beforeEach(() => {
		container = getTestContainer();
		clientLocalDataSourceImpl = container.get<ClientLocalDataSource>(ClientLocalDataSource);
		storage = container.get(HashedSessionStorage);
	});
	afterEach(() => {
		storage.clear();
	});
	describe('save', () => {
		it('should save data to storage', () => {
			const params = { page: 1, pageSize: 10 };
			const data = [{ id: 1, name: 'test' }];
			clientLocalDataSourceImpl.save(params, data as any);
			expect(storage.getItem(params)).toEqual(data);
		});
	});
	describe('get', () => {
		it('should get data from storage', () => {
			const params = { page: 1, pageSize: 10 };
			const data = [{ id: 1, name: 'test' }];
			storage.setItem(params, data as any);
			expect(clientLocalDataSourceImpl.get(params)).toEqual(data);
		});
		it('should return null if data not found', () => {
			const params = { page: 1, pageSize: 10 };
			expect(clientLocalDataSourceImpl.get(params)).toEqual(null);
		});
	});
});
