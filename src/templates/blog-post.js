import React from 'react';
import Helmet from 'react-helmet';
import styles from './styles/blog-post.module.css';

export default function Template({
    data, // this prop will be injected by the graphQL query
}) {
    const { markdownRemark: post} = data;
    return (
        <div>
            <Helmet title={`Lost Coding - ${post.frontmatter.title}`}/>
            <div>
                <h1>{post.frontmatter.title}</h1>
                {/* The markdown file will be rendered here  */}
                <div
                    dangerouslySetInnerHTML={{__html: post.html}}
                />
            </div>
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: {path: { eq: $path } }) {
            html
            frontmatter {
                date(formatString: " MM DD, YYYY)
                path
                title
            }
        }
    }
`
;