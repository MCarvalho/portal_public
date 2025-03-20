import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import styles from './styles.module.css';

const NextArrow = ({
  className,
  style,
  onClick,
  arrowColorProp = '#007bff',
  arrowSpacing = '20px',
}) => {
  return (
    <div
      className={`${className} ${styles.arrowContainer}`}
      onClick={onClick}
      style={{
        ...style,
        right: arrowSpacing,
      }}
    >
      <FaChevronRight style={{ color: arrowColorProp }} size="2.5em" />
    </div>
  );
};

export default NextArrow;
