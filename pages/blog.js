import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
// Step 1: Collect all files from blogdata directory
// Step 2: Iterate and display them

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);


  const fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs

    let data = await fetch(`http://localhost:3000/api/blogs/?counts=${count+2}`);
    setCount(count+2);
    data = await data.json();
    setBlogs(data);
    
  };

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setBlogs(data);
  //     });
  // }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      <InfiniteScroll
          dataLength={blogs.length}
          next={fetchMoreData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map(({ title, slug, metadesc }) => (
            <div key={slug} className="blogItem">
              <Link href={`/blogpost/${slug}`}>
                <h3 className={styles.blogItemh3}>{title}</h3>
              </Link>
              <p>{metadesc.substr(0, 90)}</p>
            </div>
          ))}
        </InfiniteScroll>


        {/* <div className="blogs">
          
        </div> */}
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  let allCount = data.length;
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(("blogdata/" + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  return {
    props: {allBlogs, allCount}, // will be passed to the page component as props
  }
}

export default Blog;
