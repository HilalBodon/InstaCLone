import React, { useState } from 'react';
import axios from 'axios';

const FollowButton = ({ user, onFollow, onUnfollow }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = async () => {
    try {
      await axios.post(`http://localhost:8000/api/users/${user.id}/follow`);
      setIsFollowing(true);
      onFollow(user.id);
    } catch (error) {
      console.error('Follow failed:', error);
    }
  };

  const handleUnfollow = async () => {
    try {
      await axios.post(`http://localhost:8000/api/users/${user.id}/unfollow`);
      setIsFollowing(false);
      onUnfollow(user.id);
    } catch (error) {
      console.error('Unfollow failed:', error);
    }
  };

  return (
    <div>
      {isFollowing ? (
        <button onClick={handleUnfollow}>Unfollow</button>
      ) : (
        <button onClick={handleFollow}>Follow</button>
      )}
    </div>
  );
};

export default FollowButton;
