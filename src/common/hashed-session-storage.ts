import {createHash} from "node:crypto";

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

	public getItem(key: string | object): string | null {
		const hashedKey = this.generateHashKey(key);
		return sessionStorage.getItem(hashedKey);
	}

	public setItem(key: string | object, value: string): void {
		const hashedKey = this.generateHashKey(key);
		sessionStorage.setItem(hashedKey, value);
	}

	public removeItem(key: string | object): void {
		const hashedKey = this.generateHashKey(key);
		sessionStorage.removeItem(hashedKey);
	}

	public clear(): void {
		sessionStorage.clear();
	}
}
