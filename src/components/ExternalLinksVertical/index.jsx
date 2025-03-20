import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles.module.css';
import ExternalLinksModal from '../ExternalLinksModal';
import {
  FaExternalLinkAlt,
  FaRocket,
  FaStar,
  FaRegSmile,
} from 'react-icons/fa';
import externalLinks from '../../config/externalLinks';

Modal.setAppElement('#root');

const ExternalLinksVertical = () => {
  const { fontSize, contrast } = useContext(ThemeContext);
  const vColor = contrast === 'normal' ? '#000' : '#fff';

  const containerStyle = {
    fontSize: `${fontSize}px`,
    color: vColor,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const openModal = (link) => {
    setActiveLink(link);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveLink(null);
  };

  const iconArray = [FaExternalLinkAlt, FaRocket, FaStar, FaRegSmile];

  return (
    <div className={styles.container} style={containerStyle}>
      <h2 className={styles.title}>Links Externos</h2>
      <div className={styles.linkList}>
        {externalLinks.map((link, index) => {
          const IconComponent = iconArray[index % iconArray.length];
          return (
            <div
              key={link.id}
              className={styles.linkItem}
              onClick={() => openModal(link)}
              title={link.title}
            >
              <div className={styles.iconContainer}>
                <IconComponent className={styles.icon} />
              </div>
              <div className={styles.linkTitle}>{link.title}</div>
            </div>
          );
        })}
      </div>

      {modalIsOpen && (
        <ExternalLinksModal
          externalLinks={externalLinks}
          initialActiveLink={activeLink}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ExternalLinksVertical;
