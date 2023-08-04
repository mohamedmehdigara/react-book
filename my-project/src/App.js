import React, { useState } from "react";
import Header from "./components/Header";
import Posts from "./components/Posts";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import { Link } from "react-router-dom";
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
</Routes>  
</div>
</Router>
  );
};

export default App;