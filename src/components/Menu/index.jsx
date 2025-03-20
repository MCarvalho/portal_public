import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import colors from '../../config/colors';

const Menu = ({ searchInputRef }) => {
  const { contrast, fontSize } = useContext(ThemeContext);

  const menuStyle = {
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
    fontSize: `${fontSize}px`,
  };

  return (
    <nav className={styles.menuPrincipal} style={menuStyle}>
      <div className={styles.menuLeft} id="menu">
        <Link to="/">
          <img
            src="/prefeitura.png"
            alt="Logo do Portal"
            className={styles.logo}
          />
        </Link>
      </div>
      <div className={styles.menuRight}>
        <Link to="/">Pagina Inicial</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/sobre">Sobre</Link>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Buscar..."
            aria-label="Campo de busca"
            ref={searchInputRef}
            className={styles.input}
          />
          <button
            type="submit"
            aria-label="Buscar"
            className={styles.searchButton}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
