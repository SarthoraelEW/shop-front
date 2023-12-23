import { createContext } from 'react';
import { ProductsContextType } from './ProductsContext.model';
import { mockedCollections, mockedOffer, mockedProducts } from '../../../mock';

export const ProductsContext = createContext<ProductsContextType>({
  offers: [mockedOffer],
  collections: [...mockedCollections],
  products: [...mockedProducts]
});
