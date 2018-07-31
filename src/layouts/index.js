import React from "react";
import Link from 'gatsby-link'

const ListLink = props => 
<li style={{display: 'inline-block', marginRight: '1rem'}}>
  <Link to={props.to} style={{color: "#DDDDDD"}}>
    {props.children}
  </Link>
</li>
export default ({ children }) => (
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0px 0px`}}>
    <header style={{ paddingBottom: '1.5rem', backgroundColor: `#333333` }}>
      <Link to="/" style={{textShadow: 'none', backgroundImage: 'none'}}>
        <h3 style={{ display: `inline`, color: "#DDDDDD" }}> Lost Coding </h3>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right'}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>
      </ul>
    </header>
    {children()}
  </div>
);