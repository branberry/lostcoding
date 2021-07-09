import React from 'react';
import { PageProps } from 'gatsby';
import IndexCanvas from '../components/three/IndexCanvas';
import '../styles/index.scss';
import { useSpring, animated } from 'react-spring'

const IndexPage: React.FC<PageProps> = props => {
  const animationProps = useSpring({to: { opacity: 1}, from: { opacity: 0}, delay: 200})
  return (
    <main>
      <title>Welcome!</title>
      <animated.div style={animationProps}>
        <div className="intro-container">
          <div className="intro-item"> 
            <h1>Hello, world! My name is Brandon.</h1>
          </div>
          <div className="intro-item">
            <h2>I am a software engineer.</h2>
          </div>
          <div className="intro-item">
            <h3>And this is my website.</h3>
          </div>
        </div>
        <IndexCanvas/>
      </animated.div>
    </main>
  )
};

export default IndexPage;
