import React, { useState, useContext } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { ThemeContext } from '@/contexts/ThemeContext';
import {
  FaExternalLinkAlt,
  FaRocket,
  FaStar,
  FaRegSmile,
} from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './externalLinks.module.css';
import NextArrow from '../Arrows/NextArrow';
import PrevArrow from '../Arrows/PrevArrow';
import ExternalLinksModal from '../ExternalLinksModal';
import externalLinks from '@/config/externalLinks';

Modal.setAppElement('#root');

const ExternalLinks = () => {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 5,
    arrows: true,
    nextArrow: <NextArrow arrowColorProp={vColor} arrowSpacing="5px" />,
    prevArrow: <PrevArrow arrowColorProp={vColor} arrowSpacing="5px" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 2 } },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2, slidesToScroll: 1, dots: false },
      },
    ],
  };

  return (
    <div className={styles.container} style={containerStyle}>
      <h2 className={styles.title}>Links Externos</h2>
      <Slider {...settings}>
        {externalLinks.map((link, index) => {
          const IconComponent = iconArray[index % iconArray.length];
          return (
            <div
              key={link.id}
              className={styles.item}
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
      </Slider>

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

export default ExternalLinks;
