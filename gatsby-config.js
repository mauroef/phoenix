/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    siteUrl: `https://www.mauroef.dev`,
    description: `Hi, I'm Mauro, welcome to my Personal Portfolio.`,
    linkedin: `https://www.linkedin.com/in/mauroef`,
    github: `https://github.com/mauroef`,
    resume: `https://bit.ly/2XQmPxS`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'GTM-57377RF',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Personal Portfolio`,
        short_name: `Portfolio`,
        description: `Hi, I'm Mauro, welcome to my Personal Portfolio.`,
        lang: 'en',
        display: `standalone`,
        icon: 'src/images/icon.png',
        start_url: `/`,
        background_color: `#1d1d1f`,
        theme_color: `#f5f5f7`,
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './src/content/',
      },
      __key: 'content',
    },
  ],
}
