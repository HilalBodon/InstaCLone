import React, { useState } from "react";

const CreatePostForm = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(), 
      title: title,
    };
    onPostCreated(newPost);
    setTitle("");
  };

  return (
    <div>
      <h3>Create a New Post:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
