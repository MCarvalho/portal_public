import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles.module.css';

const Post = () => {
  const { id } = useParams();
  const { fontSize, contrast } = useContext(ThemeContext);

  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const post = {
    id,
    title: `Título do Post ${id}`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: '/noticia1.jpg',
  };

  return (
    <div className={styles.postContainer} style={containerStyle}>
      <h1 className={styles.title}>{post.title}</h1>
      <img className={styles.image} src={post.image} alt={post.title} />
      <div className={styles.content}>
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
