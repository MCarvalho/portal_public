import React, { useEffect, useState } from 'react';
import { getFeaturedPosts, getPosts } from '@/services/postService';
import Carousel from '@/components/Carousel/Carousel';
import ExternalLinks from '@/components/ExternalLinks/ExternalLinks';
import ContentList from '@/components/ContentList/ContentList';

const Home = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const posts = await getFeaturedPosts();
        setFeaturedPosts(Object.values(posts || {}).filter((p) => p?.id));
      } catch (error) {
        console.error('Erro ao buscar posts em destaque:', error);
      }
    };
    const fetchRecentPosts = async () => {
      try {
        const result = await getPosts('', 1, 4, 'createdAt', 'DESC');
        setRecentPosts(result.posts || []);
      } catch (error) {
        console.error('Erro ao buscar últimos posts:', error);
      }
    };

    fetchRecentPosts();
    fetchFeatured();
  }, []);

  return (
    <div>
      <Carousel posts={featuredPosts} />
      <ExternalLinks />
      <ContentList posts={recentPosts} />
    </div>
  );
};

export default Home;
