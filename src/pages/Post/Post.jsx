import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../components/Post/Post';
import ExternalLinksVertical from '../../components/ExternalLinksVertical';
import styles from './post.module.css';
import { getPostById } from '../../services/postService';

const PostPage = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPostById(id);
        setPostData(post);
      } catch (error) {
        console.error('Erro ao buscar o post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className={styles.container}>Carregando...</div>;
  if (!postData)
    return <div className={styles.container}>Post não encontrado.</div>;

  return (
    <div className={styles.container}>
      <div className={styles.postWrapper}>
        <Post post={postData} />
      </div>
      <div className={styles.sidebar}>
        <ExternalLinksVertical />
      </div>
    </div>
  );
};

export default PostPage;
