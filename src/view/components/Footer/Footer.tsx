import { FC } from 'react';
import YoutubeIcon from '../Icons/YoutubeIcon';
import TwitterIcon from '../Icons/TwitterIcon';
import TwitchIcon from '../Icons/TwitchIcon';
import InstagramIcon from '../Icons/InstagramIcon';

import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content page-width">
          <div className="footer__content__learn-more">
            <span className="footer__title">EN SAVOIR PLUS</span>
            <Link to="/" className="footer__link">
              Accueil
            </Link>
            <Link to="/contact" className="footer__link">
              Contact
            </Link>
            <Link to="/apps/frequently-asked-questions" className="footer__link">
              FAQ
            </Link>
          </div>
          <div className="footer__content__social-media-icons">
            <Link to="https://www.youtube.com/channel/UCKKY2Jcg_P9fhfHD3ICyMxg" target="_blank" className="footer__icon">
              <YoutubeIcon />
            </Link>
            <Link to="https://twitter.com/Poncefleur" target="_blank" className="footer__icon">
              <TwitterIcon />
            </Link>
            <Link to="https://www.twitch.tv/ponce" target="_blank" className="footer__icon">
              <TwitchIcon />
            </Link>
            <Link to="https://www.instagram.com/poncefleur_/" target="_blank" className="footer__icon">
              <InstagramIcon />
            </Link>
          </div>
          <div className="footer__content__information">
            <span className="footer__title">INFORMATIONS</span>
            <Link to="/pages/conditions-generales-de-vente" className="footer__link">
              Conditions Générales de Ventes
            </Link>
            <Link to="/pages/politique-de-confidentialite" className="footer__link">
              Politique de confidentialité
            </Link>
            <Link to="/pages/mentions-legales" className="footer__link">
              Mentions Légales
            </Link>
          </div>
        </div>
      </footer>
      <div className="copyright">
        <div className="page-width">
          <small className="copyright__text">
            © 2023, <Link to="/">Boutique Ponce</Link>.
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
