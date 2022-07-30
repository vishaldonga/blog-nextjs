import React from 'react'
import {useRouter} from 'next/router'
import styles from "../../styles/BlogPost.module.css";

//// Find the file corresponsding to the slug
/// Populate them inside page and display them
const Slug = () => {
    const router = useRouter()
    const {slug} = router.query;
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ea maiores, a obcaecati nostrum veniam fuga atque recusandae, minus mollitia ipsum debitis error distinctio, nisi laudantium dolores repellat blanditiis. Veniam!</div>
      
      </main>
    </div>
  )
}

export default Slug