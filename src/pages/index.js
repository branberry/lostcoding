import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
    <div>
    <Link to="/page-2/">Go to page 2</Link>
    </div>

    <div>
    <Link to="/counter/">Counter Page</Link>
    </div>
  </div>
)

export default IndexPage
