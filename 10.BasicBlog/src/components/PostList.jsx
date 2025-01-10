import React from "react";

const PostList = ({ posts, deletePost }) => {
  return (
    <div className="container">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts yet. Create one!</p>
      ) : (
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <button onClick={() => deletePost(post.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PostList;
