import React from 'react';
import Link from 'gatsby-link'
import styled from 'styled-components';

const Header = styled.div `
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width:650;
  justify-content: center;
`;

/**
 * Creates a nicely formatted navigation bar in the header
 * @param {*} props contains the information of the page we want to link to!
 */
const ListLink = props => 
<li style={{display: 'inline-block', marginRight: '1rem'}}>
  <Link to={props.to} style={{color: "#DDDDDD"}}>
    {props.children}
  </Link>
</li>

export default ({ children, data }) => 
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0px 0px`}}>
    <header >
      <Link to="/" style={{textShadow: 'none', backgroundImage: 'none'}}>
        <h3 style={{ display: `inline`, color: "#DDDDDD" }}> {data.site.siteMetadata.title} </h3>
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

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`