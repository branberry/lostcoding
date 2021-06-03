import React from 'react';
import { PageProps } from 'gatsby';
import IndexCanvas from '../components/three/IndexCanvas';
import '../styles/index.scss';

const IndexPage: React.FC<PageProps> = props => {
  return (
    <main>
      <title>Welcome!</title>
      <div className="intro-container">
        <h1>Hello, world! My name is Brandon.</h1>
      </div>
      <IndexCanvas/>
    </main>
  )
};

export default IndexPage;
