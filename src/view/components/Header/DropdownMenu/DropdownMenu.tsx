import { FC } from 'react';
import { DropdownMenuProps } from './DropdownMenu.model';
import { useDropdownMenuCollections, useHeaderProducts } from './DropdownMenu.hooks';
import ProductCard from '../../ProductCard/ProductCard';

import './DropdownMenu.scss';

const DropdownMenu: FC<DropdownMenuProps> = ({ isDisplayed, shouldGetThemeCollections }) => {
  const collections = useDropdownMenuCollections(shouldGetThemeCollections);
  const headerProducts = useHeaderProducts();

  return (
    <div className="dropdown-menu" style={{ display: !isDisplayed ? 'none' : undefined }}>
      <div className="dropdown-menu__content">
        <div className="dropdown-menu__content__collections grid-item">
          <div className="dropdown-menu__content__collections__title">
            {shouldGetThemeCollections ? 'COLLECTIONS' : 'TOUS LES PRODUITS'}
          </div>
          <span className="dropdown-menu__content__collections__label">Tout</span>
          {collections.map((collection) => {
            return (
              <div className="dropdown-menu__content__collections__label" key={collection.id}>
                {collection.label}
              </div>
            );
          })}
          {shouldGetThemeCollections && <span className="dropdown-menu__content__collections__label">Collection Floral Records</span>}
        </div>
        {headerProducts.map((product) => {
          return (
            <div className="dropdown-menu__content__product grid-item" key={product.id}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
