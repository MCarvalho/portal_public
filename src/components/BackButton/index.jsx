// src/components/BackButton/index.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      Voltar
    </button>
  );
};

export default BackButton;
