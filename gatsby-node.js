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
