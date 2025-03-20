import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './styles.module.css';

const ContentList = () => {
  const { fontSize, contrast } = useContext(ThemeContext);

  const containerStyle = {
    fontSize: `${fontSize}px`,
    color: contrast === 'normal' ? '#000' : '#fff',
    backgroundColor: contrast === 'normal' ? '#fff' : '#222',
  };

  const posts = [
    {
      id: 1,
      title: 'Post Title 1',
      excerpt:
        'Lorem ipsum dolor sit amet. Et deleniti corporis qui voluptas autem et eaque sapiente ad aperiam possimus quo reprehenderit quis eos itaque minima.',
      image: '/noticia1.jpg',
    },
    {
      id: 2,
      title: 'Post Title 2',
      excerpt:
        'Lorem ipsum dolor sit amet. Et deleniti corporis qui voluptas autem et eaque sapiente ad aperiam possimus quo reprehenderit quis eos itaque minima. Et animi accusantium hic similique fugit non dolorum harum sit delectus obcaecati. Ut placeat consectetur 33 nihil numquam id minima dolores qui saepe molestiae At quasi perferendis sed nihil quos',
      image: '/noticia2.jpg',
    },
    {
      id: 3,
      title: 'Post Title 3',
      excerpt:
        'Lorem ipsum dolor sit amet. Et deleniti corporis qui voluptas autem et eaque sapiente ad aperiam possimus quo reprehenderit quis eos itaque minima.',
      image: '/noticia3.jpg',
    },
    {
      id: 4,
      title: 'Post Title 4',
      excerpt:
        'Lorem ipsum dolor sit amet. Et deleniti corporis qui voluptas autem et eaque sapiente ad aperiam possimus quo reprehenderit quis eos itaque minima. Et animi accusantium hic similique fugit non dolorum harum sit delectus obcaecati',
      image: '/noticia4.jpg',
    },
  ];

  return (
    <div className={styles.contentList} style={containerStyle}>
      <h2>Últimos Posts</h2>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
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
      <div className={styles.seeMore}>
        <Link to="/posts">Ver mais</Link>
      </div>
    </div>
  );
};

export default ContentList;
