import React, { useContext, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './header.module.css';
import colors from '../../config/colors';

const Header = forwardRef(({ onBusca }, ref) => {
  const { increaseFont, decreaseFont, toggleContrast, contrast } =
    useContext(ThemeContext);

  const headerStyle = {
    backgroundColor: colors[contrast].headerBg,
    color: colors[contrast].headerFc,
  };

  const handleBuscaClick = (e) => {
    e.preventDefault();
    if (onBusca) onBusca();
  };

  return (
    <header className={styles.siteHeader} ref={ref} style={headerStyle}>
      <div className={styles.headerLeft}>
        <span className={styles.headerLabel}>Ir para:</span>
        <HashLink
          smooth
          scroll={(el) => {
            const headerOffset = 120;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth',
            });
          }}
          to="#menu"
        >
          <span className={styles.icon}>1</span> Menu
        </HashLink>
        <Link to="/posts">
          <span className={styles.icon}>2</span> Notícias
        </Link>
        <Link to="#busca" onClick={handleBuscaClick}>
          <span className={styles.icon}>3</span> Buscar
        </Link>
        <Link to="OmbudsOffice">
          <span className={styles.icon}>4</span> Ouvidoria
        </Link>
        <HashLink smooth to="#footer">
          <span className={styles.icon}>5</span> Rodapé
        </HashLink>
      </div>
      <div className={styles.headerRight}>
        <button
          onClick={increaseFont}
          aria-label="Aumentar fonte"
          className={styles.fontButton}
        >
          <FaPlus className={styles.fontIcon} />
          <span className={styles.fontText}>Aumentar Fonte</span>
        </button>
        <button
          onClick={decreaseFont}
          aria-label="Diminuir fonte"
          className={styles.fontButton}
        >
          <FaMinus className={styles.fontIcon} />
          <span className={styles.fontText}>Diminuir Fonte</span>
        </button>
        <button
          onClick={toggleContrast}
          aria-label="Alternar contraste"
          className={styles.contrastButton}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <clipPath id="half">
                <rect x="0" y="0" width="12" height="24" />
              </clipPath>
            </defs>

            <circle cx="12" cy="12" r="10" fill="#000" />

            <circle cx="12" cy="12" r="10" fill="#fff" clipPath="url(#half)" />

            <circle cx="12" cy="12" r="10" fill="none" />
          </svg>
          <span className={styles.contrastText}>Contraste</span>
        </button>
      </div>
    </header>
  );
});

export default Header;
