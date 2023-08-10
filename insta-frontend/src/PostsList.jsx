import React from "react";

const PostsList = ({ posts }) => {
  return (
    <div>
      <h3>Posts:</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
