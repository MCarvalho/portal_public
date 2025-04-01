import React, { useEffect, useState, useContext } from 'react';
import { getPosts } from '@/services/postService';
import { SearchContext } from '@/contexts/SearchContext';
import AllPosts from '@/components/AllPosts/AllPosts';
import ExternalLinksVertical from '@/components/ExternalLinksVertical';
import styles from './posts.module.css';

const Posts = () => {
  const [recentPosts, setRecentPosts] = useState();
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const result = await getPosts(searchTerm, 1, 10, 'createdAt', 'DESC');
        setRecentPosts(result || []);
      } catch (error) {
        console.error('Erro ao buscar últimos posts:', error);
      }
    };

    fetchRecentPosts();
  }, [searchTerm]);

  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <AllPosts posts={recentPosts} />
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};

export default Posts;
