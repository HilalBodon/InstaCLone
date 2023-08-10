import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>} />
  
          {/* <Route path="/edit-contact/:id" element={<EditContact />} /> */}
        </Routes>
      </Router>
    )
}

export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CreatePostForm from './components/Posts/CreatePostForm';
// import PostsList from './components/Posts/PostsList';
// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   fetchPosts();
// }, []);

// const fetchPosts = async () => {
//   try {
//     const response = await axios.get('http://localhost:8000/api/posts');
//     setPosts(response.data.posts);
//     setLoading(false);
//   } catch (error) {
//     console.error('Error fetching posts:', error);
//   }
// };

// const handlePostCreated = (newPost) => {
//   setPosts((prevPosts) => [newPost, ...prevPosts]);
// };

// return (
//   <div className="App">
//     <h1>Instagram Clone</h1>
//     <CreatePostForm onPostCreated={handlePostCreated} />
//     {loading ? <p>Loading...</p> : <PostsList posts={posts} />}
//   </div>
// );
