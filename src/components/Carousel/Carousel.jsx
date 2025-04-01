import React, { useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import NextArrow from '../Arrows/NextArrow';
import PrevArrow from '../Arrows/PrevArrow';
import styles from './carousel.module.css';

const Carousel = ({ posts = [] }) => {
  const { contrast, fontSize } = useContext(ThemeContext);
  const vColor = contrast === 'normal' ? '#000' : '#fff';

  const containerStyle = {
    fontSize: `${fontSize}px`,
    color: vColor,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    nextArrow: <NextArrow arrowColorProp={vColor} arrowSpacing="20px" />,
    prevArrow: <PrevArrow arrowColorProp={vColor} arrowSpacing="20px" />,
    centerMode: true,
    centerPadding: '0px',
  };

  const newsItems = posts.map((post) => ({
    id: post.id,
    title: post.title,
    content: post.summary,
    image: new URL(post.PostImages?.[0]?.path, import.meta.env.VITE_BACKEND_URL)
      .href,
  }));

  return (
    <div className={styles.carouselContainer} style={containerStyle}>
      <Slider {...settings}>
        {newsItems.map((item) => (
          <div key={item.id} className={styles.newsItem}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.newsImage}
            />
            <div className={styles.newsContent}>
              <h2>{item.title}</h2>
              <p className={styles.summaryText}>{item.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
