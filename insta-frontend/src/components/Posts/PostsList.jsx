import React from 'react';

function PostsList({ posts }) {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.image_url} alt={`Post ${post.id}`} />
        </div>
      ))}
    </div>
  );
}

export default PostsList;
