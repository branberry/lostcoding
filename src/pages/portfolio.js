import React from 'react'
import Link from 'gatsby-link'
import {Parallax, Background} from 'react-parallax'

const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const insideStyles = {background: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};

const PortfolioPage = () => (
  <div style={{styles}}>
    <h4>My Portfolio</h4>
    <div>
    <Parallax bgImage={image1}
      strength={500}>
      <div style={{height: 500}}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
    </div>
  </div>
)

export default PortfolioPage
