import React from 'react';
import { MultiSelectComponent } from './index.dumb';
import { Meta } from '@storybook/react';
import ProductMockGenerator from '@test/__mocks__/types/entities/product';

export default {
  title: 'Components/Drawers/TicketInformation/MultiSelectComponent',
  component: MultiSelectComponent,
} as Meta;

const productGenerator = new ProductMockGenerator();

const products = productGenerator.generateMany(10);
const items = products.map(product => product.name);
export const AddOnSelect = () => <MultiSelectComponent items={items} />;
