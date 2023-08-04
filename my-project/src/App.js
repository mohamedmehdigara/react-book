import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Post from "./components/Post";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

const App = (props) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      slug: "hello-react",
      title: "Hello React",
      content: "Lorem.",
    },
    {
      id: 2,
      slug: "hello-project",
      title: "Hello Project",
      content: "Tothe.",
    },
    {
      id: 3,
      slug: "hello-blog",
      title: "Hello Blog",
      content: "Ipsum.",
    },
  ]);

  return (
     <Router>
  <div className="App">
  <Routes>
  <Route
    exact
    path="/"
    render={() => <Posts posts={posts} />}
  />
  <Route
  path="/post/:postSlug"
  render={(props) => {
    const post = posts.find(
      (post) => post.slug === props.match.params.postSlug
    );
    return <Post post={post} />;
  }}
/>
</Routes>  
</div>
</Router>
  );
};

export default App;