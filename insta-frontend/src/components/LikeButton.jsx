import React, { useState } from 'react';
import axios from 'axios';

const LikeButton = ({ post, onLike, onUnlike }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      await axios.post(`http://localhost:8000/api/posts/${post.id}/like`);
      setIsLiked(true);
      onLike(post.id);
    } catch (error) {
      console.error('Like failed:', error);
    }
  };

  const handleUnlike = async () => {
    try {
      await axios.post(`http://localhost:8000/api/posts/${post.id}/unlike`);
      setIsLiked(false);
      onUnlike(post.id);
    } catch (error) {
      console.error('Unlike failed:', error);
    }
  };

  return (
    <div>
      {isLiked ? (
        <button onClick={handleUnlike}>Unlike</button>
      ) : (
        <button onClick={handleLike}>Like</button>
      )}
    </div>
  );
};

export default LikeButton;
