import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <Router>
      <div className="container">
        <h1>Simple Blog App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/create">Create Post</Link>
        </nav>
        <hr />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<PostList posts={posts} deletePost={deletePost} />}
            />
            <Route path="/create" element={<CreatePost addPost={addPost} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
