import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles.module.css';
import colors from '../../config/colors';

const AllPosts = () => {
  const { fontSize, contrast } = useContext(ThemeContext);

  const containerStyle = {
    fontSize: `${fontSize}px`,
    backgroundColor: colors[contrast].allPostsBg,
    color: colors[contrast].allPostsFc,
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const posts = [
    {
      id: 1,
      title: 'Post Title 1',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/noticia1.jpg',
    },
    {
      id: 2,
      title: 'Post Title 2',
      excerpt: 'Lorem ipsum dolor sit amet.',
      image: '/noticia2.jpg',
    },
    {
      id: 3,
      title: 'Post Title 3',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/noticia3.jpg',
    },
    {
      id: 4,
      title: 'Post Title 4',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '/noticia4.jpg',
    },
    {
      id: 5,
      title: 'Post Title 5',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae convallis ex, non varius est.',
      image: '/noticia1.jpg',
    },
    {
      id: 6,
      title: 'Post Title 6',
      excerpt:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      image: '/noticia2.jpg',
    },
  ];

  const postsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className={styles.allPostsContainer} style={containerStyle}>
      <h1 className={styles.title}>Todos os Posts</h1>
      <div className={styles.postsGrid}>
        {currentPosts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            <div className={styles.postImage}>
              <img src={post.image} alt={post.title} />
            </div>
            <div className={styles.postDetails}>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
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
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          Anterior
        </button>
        <span className={styles.paginationInfo}>
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
