import React from 'react';
import LikeButton from '../LikeButton';

const PostItem = ({ post }) => {
  const handleLike = (postId) => {
    // Update the UI or perform any actions after liking
  };

  const handleUnlike = (postId) => {
    // Update the UI or perform any actions after unliking
  };

  return (
    <div>
      <img src={post.image_url} alt="Post" />
      <LikeButton post={post} onLike={handleLike} onUnlike={handleUnlike} />
    </div>
  );
};

export default PostItem;
