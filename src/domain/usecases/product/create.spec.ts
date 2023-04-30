import { getTestContainer } from '@common/inversion-container-test';
import { Container } from 'inversify';
import { ProductCreateUseCase } from '@domain/usecases/product/create';
import { ProductRepository } from '@domain/repositories/product';
import { ProductEntity } from '@domain/types/entities/product';
import { mock } from 'jest-mock-extended';

describe('ProductCreateUseCase', () => {
	let container: Container;
	let productCreateUseCase: ProductCreateUseCase;
	let productRepository: ProductRepository;
	beforeAll(() => {
		container = getTestContainer();
		productCreateUseCase = container.get(ProductCreateUseCase);
		productRepository = container.get(ProductRepository);
	});
	it('should be defined', () => {
		expect(productCreateUseCase).toBeDefined();
	});
	it('should be able to call call', async () => {
		const spy = jest.spyOn(productRepository, 'create');
		spy.mockResolvedValue(mock<ProductEntity>());
		await productCreateUseCase.call();
		expect(spy).toHaveBeenCalled();
	});
});
