import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    addPost(newPost);
    navigate("/");
  };

  return (
    <div className="container">
      <h2>Create a new Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <br />
          <textarea
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
