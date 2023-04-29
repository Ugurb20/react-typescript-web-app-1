import { ApiUrl } from '@domain/types/common/api-url';
import 'reflect-metadata';
import { containerBind } from '@common/inversion-common';
import { ApiUrlSymbol } from '@domain/types/symbols';
import { Container } from 'inversify';

let container: Container;

export const createTestInversion = () => {
	container = new Container();

	container
		.bind<ApiUrl>(ApiUrlSymbol)
		.toConstantValue({ value: process.env.API_URL as string });

	containerBind(container);
};

export const getTestContainer = () => {
	if (!container) {
		createTestInversion();
		return container;
	}
	return container;
};
