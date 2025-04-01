import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './post.module.css';

const Post = ({ post }) => {
  const { fontSize, contrast } = useContext(ThemeContext);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!post) {
    return (
      <div className={styles.postContainer}>
        <p>Post não encontrado.</p>
      </div>
    );
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
    color: contrast === 'normal' ? '#000' : '#fff',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  return (
    <article className={styles.postContainer} style={containerStyle}>
      <h1 className={styles.title}>{post.title}</h1>
      <time className={styles.date} dateTime={post.createdAt}>
        {formattedDate}
      </time>

      {post.coverImagePath && (
        <figure className={styles.figure}>
          <img
            className={styles.image}
            src={post.coverImagePath}
            alt={post.title}
            loading="lazy"
          />
          {/* <figcaption>Legenda da imagem (opcional)</figcaption> */}
        </figure>
      )}

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
};

export default Post;
