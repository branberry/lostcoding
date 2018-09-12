import React from 'react'
import Link from 'gatsby-link'
import styles from '../components/index.module.scss'
import Grid from 'react-semantic-ui'

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
//style={{ margin: `0 auto`, maxWidth: 650, padding: `0px 0px`}}
export default ({ children, data }) => 
  <div className={styles.container}>
    <Grid className={styles.headers}>
      <Link to="/" >
        <h1 className={styles.title}> {data.site.siteMetadata.title} </h1>
      </Link>
      <ul style={{ listStyle: 'none', float: 'right'}}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
        <ListLink to="/portfolio/">Portfolio</ListLink>

      </ul>
    </Grid>
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
`;

/**
 *   <div className={styles.container}>
    <header className={styles.headers}>
      <Link to="/" >
        <h1 className={styles.title}> {data.site.siteMetadata.title} </h1>
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
 */