import api from './api';

export const getPosts = async (
  search = '',
  page = 1,
  limit = 10,
  orderBy = 'createdAt',
  orderDirection = 'DESC',
) => {
  const response = await api.get('/public/posts', {
    params: { search, page, limit, orderBy, orderDirection },
  });
  return response.data;
};

export const getFeaturedPosts = async () => {
  const response = await api.get('/public/posts/featured');
  return response.data;
};

export const getPostById = async (id) => {
  const response = await api.get(`/public/posts/${id}`);
  return response.data;
};
