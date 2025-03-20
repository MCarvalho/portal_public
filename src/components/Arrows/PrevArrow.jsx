import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './styles.module.css';

const PrevArrow = ({
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
        left: arrowSpacing,
      }}
    >
      <FaChevronLeft style={{ color: arrowColorProp }} size="2.5em" />
    </div>
  );
};

export default PrevArrow;
