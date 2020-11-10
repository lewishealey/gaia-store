module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-airtable`,
        options: {
          apiKey: `keyml23Di0yMQ6Pdi`, // may instead specify via env, see below
          concurrency: 5, // default, see using markdown and attachments for more information
          tables: [
            {
              baseId: `appPEbBkvn8rwZen5`,
              tableName: `Products`,
              queryName: `ProductData`,
              tableLinks: [`Ingredient-Table`,`Categories`], // optional, for deep linking to records across tables.
            },
            {
                baseId: `appPEbBkvn8rwZen5`,
                tableName: `Categories`,
                queryName: `CategoryData`,
                tableLinks: [`Products`], // optional, for deep linking to records across tables.
              },
          ]
        }
      }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
