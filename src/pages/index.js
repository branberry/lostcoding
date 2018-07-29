import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div style={{ margin: '3rem auto', maxWidth: 600}}>
    <h1>Welcome to Lost Coding!</h1>
    <div>
      <p>
        Get lost in code with me!
      </p>

    </div>

    <Link to="/about-css-modules/">To css modules!</Link>
  </div>
)

export default IndexPage
