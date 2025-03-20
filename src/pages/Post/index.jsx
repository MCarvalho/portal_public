import React from 'react';
import Post from '../../components/Post';
import ExternalLinksVertical from '../../components/ExternalLinksVertical';
import styles from './styles.module.css';

const PostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <Post />
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};

export default PostPage;
