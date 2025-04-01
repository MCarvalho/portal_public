import React, { useContext, useState, useEffect } from 'react';
import { getPosts } from '@/services/postService';
import { Link } from 'react-router-dom';
import { ThemeContext } from '@/contexts/ThemeContext';
import { SearchContext } from '@/contexts/SearchContext';

import styles from './allPosts.module.css';
import colors from '@/config/colors';

const AllPosts = () => {
  const { fontSize, contrast } = useContext(ThemeContext);
  const { searchTerm } = useContext(SearchContext);

  const [posts, setPosts] = useState([]);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts(
          searchTerm,
          page,
          limit,
          'createdAt',
          'DESC',
        );
        setPosts(response.posts);
        setTotal(response.total);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      }
    };
    fetchPosts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page, limit, searchTerm]);

  const totalPages = Math.ceil(total / limit);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: colors[contrast].allPostsBg,
    color: colors[contrast].allPostsFc,
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  return (
    <div className={styles.allPostsContainer} style={containerStyle}>
      <h1 className={styles.title}>Todos os Posts</h1>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postImage}>
              <img
                src={
                  new URL(post.coverImagePath, import.meta.env.VITE_BACKEND_URL)
                }
                alt={post.title}
                className={styles.image}
              />
            </div>
            <div className={styles.postDetails}>
              <h3>{post.title}</h3>
              <p>{post.summary?.slice(0, 240)}...</p>
              <Link to={`/posts/${post.id}`} className={styles.readMore}>
                Ler mais
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={styles.paginationButton}
        >
          Anterior
        </button>
        <span className={styles.paginationInfo}>
          {page} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className={styles.paginationButton}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
