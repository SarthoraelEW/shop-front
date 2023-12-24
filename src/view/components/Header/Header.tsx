import { FC, useState } from 'react';
import { useMobileMedia } from '../../hooks/useMediaQuery';
import MobileHeader from './MobileHeader/MobileHeader';
import ArrowDownIcon from '../Icons/ArrowDownIcon';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import CartIcon from '../Icons/CartIcon';
import { MenuItems } from './Header.model';

import './Header.scss';
import { ClickAwayListener } from '@mui/base';

const Header: FC = () => {
  const isMobile = useMobileMedia();
  const [activeMenu, setActiveMenu] = useState<MenuItems | null>(MenuItems.HOME);
  const [activeDropdownMenu, setActiveDropdownMenu] = useState<string | null>(null);

  const handleOnChangeActiveMenu = (newActiveMenu: MenuItems | null) => () => {
    setActiveMenu(newActiveMenu);
  };

  const handleOnClickAllProductsMenu = () => {
    handleOnChangeActiveMenu(MenuItems.ALL_PRODUCTS)();
    setActiveDropdownMenu('ALL_PRODUCTS');
  };

  const handleOnClickCollectionsMenu = () => {
    handleOnChangeActiveMenu(MenuItems.COLLECTIONS)();
    setActiveDropdownMenu('COLLECTIONS');
  };

  const handleOnClickAwayDropdownMenu = () => {
    setActiveDropdownMenu(null);
  };

  return (
    <header className="header">
      <video autoPlay loop muted>
        <source src="/src/assets/header1.webm" />
      </video>
      {isMobile ? (
        <MobileHeader />
      ) : (
        <div className="header__content page-width">
          <a className="header__content__website-logo" href="/">
            <img src="https://boutiqueponce.fr/cdn/shop/files/Ponce-logo-couleur-rvb-1200px_150x.png?v=1613785515" alt="website logo" />
          </a>
          <div className="header__content__menu">
            <ul className="header__content__menu__grid">
              <li
                className={`header__content__menu__grid__item${activeMenu === MenuItems.HOME ? ' active-menu' : ''}`}
                onClick={handleOnChangeActiveMenu(MenuItems.HOME)}
              >
                <span>ACCUEIL</span>
              </li>
              <ClickAwayListener onClickAway={handleOnClickAwayDropdownMenu}>
                <div className="dropdown-grid-item">
                  <li
                    className={`header__content__menu__grid__item${activeMenu === MenuItems.ALL_PRODUCTS ? ' active-menu' : ''}`}
                    onClick={handleOnClickAllProductsMenu}
                  >
                    <span>
                      TOUS LES PRODUITS
                      <ArrowDownIcon />
                    </span>
                  </li>
                  <DropdownMenu isDisplayed={activeDropdownMenu === 'ALL_PRODUCTS'} shouldGetThemeCollections={false} />
                  <li
                    className={`header__content__menu__grid__item${activeMenu === MenuItems.COLLECTIONS ? ' active-menu' : ''}`}
                    onClick={handleOnClickCollectionsMenu}
                  >
                    <span>
                      COLLECTIONS
                      <ArrowDownIcon />
                    </span>
                  </li>
                  <DropdownMenu isDisplayed={activeDropdownMenu === 'COLLECTIONS'} shouldGetThemeCollections={true} />
                </div>
              </ClickAwayListener>
              <li
                className={`header__content__menu__grid__item${activeMenu === MenuItems.CONTACT ? ' active-menu' : ''}`}
                onClick={handleOnChangeActiveMenu(MenuItems.CONTACT)}
              >
                <span>CONTACT</span>
              </li>
              <a href="https://www.twitch.tv/ponce" target="_blank">
                <li className="header__content__menu__grid__item">
                  <span className="">PONCE.TV</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="header__content__icons">
            <div className="header__content__icons__cart" onClick={handleOnChangeActiveMenu(null)}>
              <CartIcon />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
