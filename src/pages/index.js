import React from 'react'
import Link from 'gatsby-link'
import styles from '../components/index.module.css'

const IndexPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 600}}>
    <h1>Welcome to Lost Coding!</h1>
    <div>
      <p>
        Get lost in code with me!
      </p>
      <div className={styles.box}/>
    </div>
  </div>
)

export default IndexPage
