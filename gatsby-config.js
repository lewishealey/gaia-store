module.exports = {
  siteMetadata: {
    title: `Gaia`,
    siteUrl: `https://savegaia.store/`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `montserrat\:100,200,300,400,600,700,800,900` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      },
    {
        resolve: `gatsby-plugin-alias-imports`,
        options: {
          alias: {
            "@layout": "src/components/layout"
          },
        }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
      {
        resolve: "gatsby-plugin-google-tagmanager",
        options: {
          id: "GTM-MP25XCN",
        },
      },
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
              tableLinks: [`Ingredients`,`Categories`,`Insights`,`Considerations`,`Questions`], // optional, for deep linking to records across tables.
            },
            {
                baseId: `appPEbBkvn8rwZen5`,
                tableName: `Categories`,
                queryName: `CategoryData`,
                tableLinks: [`Products`], // optional, for deep linking to records across tables.
              },
            {
                baseId: `appPEbBkvn8rwZen5`,
                tableName: `Reviews`,
                queryName: `ReviewData`,
            },
            {
                baseId: `appPEbBkvn8rwZen5`,
                tableName: `Ingredients`,
                queryName: `IngredientData`,
                tableLinks: [`Products`,`Questions`], // optional, for deep linking to records across tables.
            },
            {
                baseId: `appPEbBkvn8rwZen5`,
                tableName: `Insights`,
                queryName: `InsightData`,
            },
            {
                baseId: `appPEbBkvn8rwZen5`,
                tableName: `Considerations`,
                queryName: `ConsiderationData`,
            },
            {
                baseId: `appPEbBkvn8rwZen5`,
                tableName: `Questions`,
                queryName: `QuestionData`,
            },
          ]
        }
      }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
