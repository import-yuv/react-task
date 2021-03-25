import React, { useState, useEffect } from "react";
import Blogs from "../components/Blogs";
export default function BlogsContainer(props) {
  const [allBlogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const blogs = json.map((element, index) => {
          const blog = element;
          return blog;
        });
        setBlogs(blogs);
      });
  };
  return (
    <>
      <Blogs {...props} allBlogs={allBlogs} />
    </>
  );
}
