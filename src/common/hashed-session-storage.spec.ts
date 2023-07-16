import { HashedSessionStorage } from '@common/hashed-session-storage';

describe('HashedSessionStorage', () => {
	let hashedSessionStorage: HashedSessionStorage;
	beforeEach(() => {
		hashedSessionStorage = new HashedSessionStorage();
	});
	afterEach(() => {
		hashedSessionStorage.clear();
	});

	it('should be defined', () => {
		expect(hashedSessionStorage).toBeDefined();
	});

	describe('generateHashKey', () => {
		it('should generate a hash key from a string', () => {
			const hashKey = hashedSessionStorage.generateHashKey('test');
			expect(hashKey).toBeTruthy();
		});
		it('should generate a hash key from an object', () => {
			const hashKey = hashedSessionStorage.generateHashKey({test: 'test'});
			expect(hashKey).toBeTruthy();
		});
		it('should generate same hash key from same string', () => {
			const hashKey1 = hashedSessionStorage.generateHashKey('test');
			const hashKey2 = hashedSessionStorage.generateHashKey('test');
			expect(hashKey1).toEqual(hashKey2);
		});
		it('should generate same hash key from same object', () => {
			const hashKey1 = hashedSessionStorage.generateHashKey({test: 'test'});
			const hashKey2 = hashedSessionStorage.generateHashKey({test: 'test'});
			expect(hashKey1).toEqual(hashKey2);
		});
		it('should generate different hash key from different string', () => {
			const hashKey1 = hashedSessionStorage.generateHashKey('test1');
			const hashKey2 = hashedSessionStorage.generateHashKey('test2');
			expect(hashKey1).not.toEqual(hashKey2);
		});
		it('should generate different hash key from different object', () => {
			const hashKey1 = hashedSessionStorage.generateHashKey({test: 'test1'});
			const hashKey2 = hashedSessionStorage.generateHashKey({test: 'test2'});
			expect(hashKey1).not.toEqual(hashKey2);
		});
		it('should generate same hash key from same object with same keys but ordered differently', () => {
			const hashKey1 = hashedSessionStorage.generateHashKey({test1: 'test1', test2: 'test2'});
			const hashKey2 = hashedSessionStorage.generateHashKey({test2: 'test2', test1: 'test1'});
			expect(hashKey1).toEqual(hashKey2);
		});
	});
	describe('getItem', () => {
		it('should get an item from session storage', () => {
			hashedSessionStorage.setItem('test', 'test');
			const item = hashedSessionStorage.getItem('test');
			expect(item).toEqual('test');
		});
		it('should get null if item is not available', () => {
			const item = hashedSessionStorage.getItem('test');
			expect(item).toBeNull();
		});
	});
	describe('setItem', () => {
		it('should set an item in session storage', () => {
			hashedSessionStorage.setItem('test', 'test');
			const item = hashedSessionStorage.getItem('test');
			expect(item).toEqual('test');
		});
	});
	describe('removeItem', () => {
		it('should remove an item from session storage', () => {
			hashedSessionStorage.setItem('test', 'test');
			hashedSessionStorage.removeItem('test');
			const item = hashedSessionStorage.getItem('test');
			expect(item).toBeNull();
		});
	});
	describe('clear', () => {
		it('should clear all items from session storage', () => {
			hashedSessionStorage.setItem('test', 'test');
			hashedSessionStorage.setItem('test2', 'test2');
			hashedSessionStorage.clear();
			const item = hashedSessionStorage.getItem('test');
			const item2 = hashedSessionStorage.getItem('test2');
			expect(item).toBeNull();
			expect(item2).toBeNull();
		});
	});
});
