import { FC, PropsWithChildren } from 'react';
import { ProductsContext } from './ProductsContext';
import { mockedCollections, mockedOffer, mockedProducts } from '../../../mock';

const ProductsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ProductsContext.Provider value={{ offers: [mockedOffer], collections: [...mockedCollections], products: [...mockedProducts] }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
