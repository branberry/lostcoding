import React from 'react';
import { PageProps } from 'gatsby';
import '../styles/index.scss';
// markup
const IndexPage: React.FC<PageProps> = props => {
  return (
    <main>
      <title>Welcome!</title>
      <div className="intro-container">
        <h1>Hi, I'm Brandon!</h1>
      </div>

    </main>
  )
}

export default IndexPage
