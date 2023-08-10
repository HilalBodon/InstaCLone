import React from 'react';
import FollowButton from '../FollowButton';

const UserProfile = ({ user }) => {
  const handleFollow = (userId) => {
    //???????????????
  };

  const handleUnfollow = (userId) => {
    // ??????????????????
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <FollowButton user={user} onFollow={handleFollow} onUnfollow={handleUnfollow} />
    </div>
  );
};

export default UserProfile;
