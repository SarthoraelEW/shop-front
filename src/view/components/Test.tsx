import { FC, useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext/ProductsContext';
import ProductCard from './ProductCard/ProductCard';

const Test: FC = () => {
  const { offers, collections, products } = useContext(ProductsContext);

  return (
    <div>
      <p>Nb offers: {offers.length}</p>
      <p>Nb collections: {collections.length}</p>
      <p>Nb products: {products.length}</p>
      <div className="products-container" style={{ display: 'flex' }}>
        <div style={{ width: '380px' }}>
          <ProductCard product={products[0]} />
        </div>
        <div style={{ width: '380px' }}>
          <ProductCard product={products[1]} />
        </div>

        <div style={{ width: '380px' }}>
          <ProductCard product={products[2]} />
        </div>

        <div style={{ width: '380px' }}>
          <ProductCard product={products[3]} />
        </div>
      </div>
    </div>
  );
};

export default Test;
