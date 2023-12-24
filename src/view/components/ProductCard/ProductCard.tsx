import { FC } from 'react';
import { Product } from '../../../model/Product';

import './ProductCard.scss';

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="product">
      <div className="product__image-container">
        <div className="product__image-container__wrapper">
          <img src={product.images[0]} alt={product.label} />
        </div>
      </div>
      <span className="product__label">{product.label}</span>
      <span className="product__price">
        €
        {product.variants[0].price.toLocaleString('fr-FR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}
      </span>
      <div className="product__overlay">
        <button className="product__overlay__button">VOIR</button>
      </div>
    </div>
  );
};

export default ProductCard;
