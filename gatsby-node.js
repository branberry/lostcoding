/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

 // Implement the Gatsby API "onCreatePage"
 exports.onCreatePage = async ({page, boundActionCreators}) => {
     const { createPage } = boundActionCreators;

     // page.matchPath is a special key that's used for matching pages only on the client
     if(page.path.match(/^\/app/)) {
         page.matchPath = "/app/:path";

        // update the page
        createPage(page);
     }
 }

 const path = require("path");

 exports.createPages = ({boundActionCreators,graphql}) => {
     const { createPage } = boundActionCreators;

     const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

     return graphql(`{
            allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date]}
                limit: 1000
            ) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
     `).then(result => {
        if(result.errors) {
            return Promise.reject(result.errors);
        }

        result.data.allMarkdownRemark.edges
            .forEach(({ node }) => {
                createPage({
                    path: node.frontmatter.path,
                    component: blogPostTemplate,
                    context: {} // additional data can be passed via context
                });
            });
     });
 };