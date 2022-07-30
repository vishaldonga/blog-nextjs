import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all files from blogdata directory
// Step 2: Iterate and display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs">
          {blogs.map(({ title, slug, content }) => (
            <div key={slug} className="blogItem">
              <Link href={`/blogpost/${slug}`}>
                <h3 className={styles.blogItemh3}>{title}</h3>
              </Link>
              <p>{content.substr(0, 90)}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;
