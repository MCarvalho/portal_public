import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles.module.css';
import {
  FaExternalLinkAlt,
  FaRocket,
  FaStar,
  FaRegSmile,
} from 'react-icons/fa';

const ExternalLinksModal = ({ externalLinks, initialActiveLink, onClose }) => {
  const { fontSize, contrast } = useContext(ThemeContext);

  // Define estilos dinâmicos para o container do modal com base no ThemeContext
  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
  };

  const [activeLink, setActiveLink] = useState(initialActiveLink);
  const iconArray = [FaExternalLinkAlt, FaRocket, FaStar, FaRegSmile];

  // Impede que o clique na overlay feche o modal se clicar dentro do conteúdo
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={handleModalClick}
        style={containerStyle}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className={styles.modalContent}>
          {/* Submenu com ícones e títulos */}
          <div className={styles.submenu} style={containerStyle}>
            {externalLinks.map((link, index) => {
              const IconComponent = iconArray[index % iconArray.length];
              return (
                <button
                  key={link.id}
                  className={`${styles.submenuItem} ${
                    activeLink.id === link.id ? styles.active : ''
                  }`}
                  onClick={() => setActiveLink(link)}
                >
                  <div className={styles.iconContainer}>
                    <IconComponent className={styles.submenuIcon} />
                  </div>
                  <span className={styles.submenuText}>{link.title}</span>
                </button>
              );
            })}
          </div>
          {/* Área principal: exibe o conteúdo do link ativo */}
          <div className={styles.iframeContainer}>
            <iframe
              src={activeLink.url}
              title={activeLink.title}
              allowFullScreen
              className={styles.iframe}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinksModal;
