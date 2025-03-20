import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () => {
  const { fontSize, contrast } = useContext(ThemeContext);

  const footerStyle = {
    fontSize: `${fontSize}px`,
    color: contrast === 'normal' ? '#000' : '#fff',
    backgroundColor: contrast === 'normal' ? '#f0f0f0' : '#111',
  };

  return (
    <footer className="site-footer" style={footerStyle} id="footer">
      <div className="footer-content">
        <p>&copy; 2025 Portal de Notícias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
