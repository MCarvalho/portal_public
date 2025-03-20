import React from 'react';
import Carousel from '../../components/Carousel';
import ExternalLinks from '../../components/ExternalLinks';
import ContentList from '../../components/ContentList';

const Home = () => {
  return (
    <div>
      <Carousel />
      <ExternalLinks />
      <ContentList />
    </div>
  );
};

export default Home;
