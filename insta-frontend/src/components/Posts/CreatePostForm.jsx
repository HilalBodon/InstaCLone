// import React, { useState } from 'react';
// import axios from 'axios';

// function CreatePostForm({ onPostCreated }) {
//   const [imageURL, setImageURL] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post('http://localhost:8000/api/posts', { image_url: imageURL });
//       onPostCreated(response.data.post);
//       setImageURL('');
//     } catch (error) {
//       console.error('Error creating post:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>Create New Post</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Image URL"
//           value={imageURL}
//           onChange={(e) => setImageURL(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Creating...' : 'Create Post'}
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CreatePostForm;


import React, { useState } from 'react';
import axios from 'axios';

const CreatePostForm = ({ onPostCreated }) => {
  const [image_url, setImageUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/posts', { image_url });
      onPostCreated(response.data.post);
      setImageUrl('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image_url"
          placeholder="Image URL"
          value={image_url}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
