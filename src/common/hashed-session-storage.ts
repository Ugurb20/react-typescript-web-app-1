import {createHash} from "node:crypto";
import { injectable } from 'inversify';

@injectable()
export class HashedSessionStorage {
	private stringifySorted(obj: Record<string, any>): string {
		const sortedObj: Record<string, any> = {};
		const sortedKeys = Object.keys(obj).sort();
		for (const key of sortedKeys) {
			sortedObj[key] = typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key]) ? this.stringifySorted(obj[key]) : obj[key];
		}
		return JSON.stringify(sortedObj);
	}


	public generateHashKey(key: string | object): string {
		const keyString = typeof key === 'object' ? this.stringifySorted(key) : key;
		const hash = createHash('sha256');
		hash.update(keyString);
		return hash.digest('hex');
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public getItem(key: string | object): any | null{
		const hashedKey = this.generateHashKey(key);
		const item = sessionStorage.getItem(hashedKey);
		return item ? JSON.parse(item) : null;
	}

 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public setItem(key: string | object, value: any): void {
		const hashedKey = this.generateHashKey(key);
		sessionStorage.setItem(hashedKey, JSON.stringify(value));
	}

	public removeItem(key: string | object): void {
		const hashedKey = this.generateHashKey(key);
		sessionStorage.removeItem(hashedKey);
	}

	public clear(): void {
		sessionStorage.clear();
	}
}
