import React, { useEffect, useState } from 'react';
import { MultiSelectComponent } from '@components/drawers/ticket-information/components/add-ons/index.dumb';
import { useInjection } from 'inversify-react';
import { ProductGetAllUseCase } from '@domain/usecases/product/get-all';
import { ProductEntity } from '@domain/types/entities/product';

export interface AddOnSelectProps {
  initialValues: ProductEntity[];
}

export const AddOnSelect: React.FC<AddOnSelectProps> = ({ initialValues }) => {
  const useAllProducts =
    useInjection<ProductGetAllUseCase>(ProductGetAllUseCase);
  const [allProducts, setAllProducts] = useState<ProductEntity[]>([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await useAllProducts.call();
      setAllProducts(products);
    };

    getAllProducts();
  }, []);

  const items = allProducts.map(product => product.name);
  const initialItems = initialValues.map(product => product.name);

  return <MultiSelectComponent items={items} initialValues={initialItems} />;
};
