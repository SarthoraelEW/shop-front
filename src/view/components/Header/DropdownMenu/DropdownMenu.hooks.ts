import { useContext } from 'react';
import { Collection } from '../../../../model/Collection';
import { ProductsContext } from '../../../context/ProductsContext/ProductsContext';
import { Product } from '../../../../model/Product';

export const useDropdownMenuCollections = (shouldGetThemeCollections: boolean): Collection[] => {
  const allCollections = useContext(ProductsContext).collections;

  return allCollections.filter((c) => c.isThemeCollection === shouldGetThemeCollections && c.name !== 'header');
};

export const useHeaderProducts = (): Product[] => {
  const { collections, products } = useContext(ProductsContext);
  const headerCollection = collections.filter((c) => c.name === 'header')?.[0];
  if (!headerCollection) {
    return [];
  }
  return products.filter((p) => headerCollection.products.includes(p.id));
};
