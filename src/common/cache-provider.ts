import { CacheEntity } from '@domain/types/common/cache-entity';
import { injectable } from 'inversify';

@injectable()
export abstract class CacheProvider<T extends CacheEntity> {

  abstract upsert(entity: Partial<T> & CacheEntity): Promise<void>;

  abstract purge(): Promise<void>;

  abstract get(id: number): Promise<T | undefined>;

  abstract bulkUpsert(entities: T[]): Promise<void>;

  abstract bulkRemove(ids: number[]): Promise<void>;

  abstract find(query: Partial<T>): Promise<T[]>;
}
