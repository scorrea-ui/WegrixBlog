module.exports = {
  siteMetadata: {
    title: 'Wegrix Blog',
    description: 'This is where I write my thoughts.',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'U5PTfI-yr6QvuEPsJme_cs3FKQFZRR04yr3qvT7gaKo',
        spaceId: 'ib0v73r0as9e',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-fontawesome-css',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        once: true,
        disable: false, // Flag for disabling animations
        selector: '[data-sal]',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-JH6DPST656',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
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
  ],
}
