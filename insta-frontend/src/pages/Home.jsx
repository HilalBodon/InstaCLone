import React, { useState, useEffect } from "react";

import PostsList from '../PostsList';
import CreatePostForm from '../CreatePostForm';

import React, { useState, useEffect } from 'react';

import axios from 'axios';
import PostsList from './components/Posts/PostsList';
import CreatePostForm from './components/Posts/CreatePostForm';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/posts');
      setPosts(response.data.posts);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handlePostCreated = (newPost) => {
    // Add the new post to the posts list
    setPosts([newPost, ...posts]);
  };

  return (
    <div>
      <h2>Home Feed</h2>
      <CreatePostForm onPostCreated={handlePostCreated} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <PostsList posts={posts} />
      )}
    </div>
  );
};

export default Home;
