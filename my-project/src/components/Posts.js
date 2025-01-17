import React from "react";
import { Link } from "react-router-dom";


const Posts = ({ posts }) => (
    <article className="posts container">
    <h1>Posts</h1>
    <ul>
      {posts.length < 1 &&(
        <li key="empty">No posts yet!</li>
      )}
    </ul>
    <h2>
  <Link to={`/post/${post.slug}`}>{post.title}</Link>
</h2>
    <ul>
  {posts.length < 1 && (
    <li key="empty">No posts yet!</li>
  )}
  {posts.map(post => (
    <li key={post.id}>
      <h2>{post.title}</h2>
    </li>
  ))}
</ul>
  </article>
);

export default Posts;