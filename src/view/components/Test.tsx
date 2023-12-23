import { FC, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsContext';

const Test: FC = () => {
  const { offers, collections, products } = useContext(ProductsContext);

  return (
    <div>
      <p>Nb offers: {offers.length}</p>
      <p>Nb collections: {collections.length}</p>
      <p>Nb products: {products.length}</p>
    </div>
  );
};

export default Test;
