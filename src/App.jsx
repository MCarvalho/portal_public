import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';
import PostPage from './pages/Post/Post';
import OmbudsOfficePage from './pages/OmbudsOffice/OmbudsOffice';
import OmbudsOfficeMessagesPage from './pages/OmbudsOfficeMessages/OmbudsOfficeMessages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/ombudsOffice" element={<OmbudsOfficePage />} />
        <Route
          path="/ombudsOffice/messages/:protocol"
          element={<OmbudsOfficeMessagesPage />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
