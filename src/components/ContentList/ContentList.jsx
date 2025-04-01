import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './contentList.module.css';

const ContentList = ({ posts = [] }) => {
  const { fontSize, contrast } = useContext(ThemeContext);
  const containerStyle = {
    fontSize: `${fontSize}px`,
    color: contrast === 'normal' ? '#000' : '#fff',
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
  };

  return (
    <div className={styles.contentList} style={containerStyle}>
      <h2>Últimos Posts</h2>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postImage}>
              <img
                src={
                  new URL(post.coverImagePath, import.meta.env.VITE_BACKEND_URL)
                }
                alt={post.title}
              />
            </div>
            <div className={styles.postDetails}>
              <h3>{post.title}</h3>
              <p>
                {post.summary?.slice(0, 240)}
                {post.summary?.length > 240 ? '...' : ''}
              </p>
              <Link to={`/posts/${post.id}`} className={styles.readMore}>
                Ler mais
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.seeMore}>
        <Link to="/posts">Ver mais</Link>
      </div>
    </div>
  );
};

export default ContentList;
