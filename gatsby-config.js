module.exports = {
  siteMetadata: {
    title: 'Lost Coding',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
   }
  ],
}
