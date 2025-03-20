import React from 'react';
import AllPosts from '../../components/AllPosts';
import ExternalLinksVertical from '../../components/ExternalLinksVertical';
import styles from './styles.module.css';

const Posts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <AllPosts />
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};

export default Posts;
