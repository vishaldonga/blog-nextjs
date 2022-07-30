import React from "react";
import styles from "../styles/Blog.module.css";
import Link from 'next/link'

// Step 1: Collect all files from blogdata directory
// Step 2: Iterate and display them

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="blogs">
          <div className="blogItem">
            <Link href={'/blogpost/javascript'}>
            <h3 className={styles.blogItemh3}>Hwo to learn JS in 2022?</h3>
            </Link>
            <p>Js is best language</p>
          </div>
          <div className="blogItem">
            <h3>Hwo to learn JS in 2022?</h3>
            <p>Js is best language</p>
          </div>
          <div className="blogItem">
            <h3>Hwo to learn JS in 2022?</h3>
            <p>Js is best language</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
