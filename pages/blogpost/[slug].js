import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import fs from 'fs';
//// Find the file corresponsding to the slug
/// Populate them inside page and display them
const Slug = (props) => {
  const [blog, setBlog] = useState(props.blog);
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setBlog(data);
  //     });
  // }, [router.isReady]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <h3>{blog && blog.author}</h3>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'how-to-learn-flask' } },
     { params: { slug: 'how-to-learn-js' } },
     { params: { slug: 'how-to-learn-nextjs' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps(context) {
  // const router = useRouter();
  // const { slug } = router.query;

  const {slug} = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  return {
    props: {blog: JSON.parse(myBlog)}, // will be passed to the page component as props
  }
  
}

export default Slug;
