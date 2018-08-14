import React from 'react'
import { Button, Parallax } from 'react-materialize'
const IndexPage = () => (
  <div style={{ margin: '2rem auto', maxWidth: 800}}>
    <h1>Welcome to Lost Coding!</h1>
    <div>
      <p>
        Get lost in code with me!
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <Button waves='light' node='a' href='http://www.google.com'> Open Me In New Tab </Button>
      </p>
    </div>
  </div>
)

export default IndexPage
