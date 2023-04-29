import { CacheProvider } from '@quicker/common/cache-provider';
import { CacheEntity } from '@domain/types/common/cache-entity';
import { injectable } from 'inversify';

export interface IndexedDbCacheProps {
  dbName: string;
  storeName: string;
}

@injectable()
export class IndexedDbCache<T extends CacheEntity> implements CacheProvider<T> {
	private dbName: string;

	private storeName: string;

	constructor({ dbName, storeName }: IndexedDbCacheProps) {
		this.dbName = dbName;
		this.storeName = storeName;
	}

	private async open(): Promise<IDBDatabase> {
		return new Promise((resolve, reject) => {
			const request = window.indexedDB.open(this.dbName, 1);

			request.onerror = () => reject(request.error);
			request.onsuccess = () => resolve(request.result);

			request.onupgradeneeded = () => {
				const db = request.result;
				db.createObjectStore(this.storeName, { keyPath: 'id' });
			};
		});
	}

	async upsert(entity: Partial<T> & CacheEntity): Promise<void> {
		const db = await this.open();
		const transaction = db.transaction(this.storeName, 'readwrite');
		const store = transaction.objectStore(this.storeName);
		// Get value from store if exists
		const request = store.get(entity.id);
		request.onsuccess = () => {
			const data = request.result;
			if (data) {
				entity = { ...data, ...entity };
			}
			store.put(entity);
		};
	}

	async purge(): Promise<void> {
		const db = await this.open();
		const transaction = db.transaction(this.storeName, 'readwrite');
		const store = transaction.objectStore(this.storeName);
		store.clear();

		return new Promise((resolve, reject) => {
			transaction.oncomplete = () => resolve();
			transaction.onerror = () => reject(transaction.error);
		});
	}

	async set(entity: T): Promise<void> {
		return this.upsert(entity);
	}

	async get(id: number): Promise<T | undefined> {
		const db = await this.open();
		const transaction = db.transaction(this.storeName, 'readonly');
		const store = transaction.objectStore(this.storeName);
		const request = store.get(id);

		return new Promise((resolve, reject) => {
			request.onsuccess = () => resolve(request.result);
			request.onerror = () => reject(request.error);
		});
	}

	async bulkUpsert(entities: T[]): Promise<void> {
		const db = await this.open();
		const transaction = db.transaction(this.storeName, 'readwrite');
		const store = transaction.objectStore(this.storeName);
		for (const entity of entities) store.put(entity);

		return new Promise((resolve, reject) => {
			transaction.oncomplete = () => resolve();
			transaction.onerror = () => reject(transaction.error);
		});
	}

	async bulkRemove(ids: number[]): Promise<void> {
		const db = await this.open();
		const transaction = db.transaction(this.storeName, 'readwrite');
		const store = transaction.objectStore(this.storeName);
		for (const id of ids) store.delete(id);

		return new Promise((resolve, reject) => {
			transaction.oncomplete = () => resolve();
			transaction.onerror = () => reject(transaction.error);
		});
	}

	async find(query: Partial<T>): Promise<T[]> {
		// Get query results
		const db = await this.open();
		const transaction = db.transaction(this.storeName, 'readonly');
		const store = transaction.objectStore(this.storeName);
		const request = store.openCursor();
		const results: T[] = [];

		return new Promise((resolve, reject) => {
			request.onsuccess = (event: Event) => {
				const cursor = (event.target as IDBRequest<IDBCursorWithValue>).result;

				if (cursor) {
					const record = cursor.value;
					let match = true;

					for (const key in query) {
						if (query.hasOwnProperty(key) && record[key] !== query[key]) {
							match = false;
							break;
						}
					}

					if (match) {
						results.push(record);
					}

					cursor.continue();
				} else {
					resolve(results.sort((a, b) => a.id - b.id));
				}
			};

			request.onerror = () => reject(request.error);
		});
	}
}
