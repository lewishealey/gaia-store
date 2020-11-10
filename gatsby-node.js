/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // Query for markdown nodes to use in creating pages.
  const result = await graphql(
    `
      {
        categories: allAirtable(filter: {queryName: {eq: "CategoryData"}}) {
            edges {
              node {
                data {
                  Name
                  Products {
                    data {
                      Slug
                      Name
                      Ingredients
                    }
                  }
                  Slug
                }
              }
            }
          }
          products: allAirtable(filter: {queryName: {eq: "ProductData"}}) {
            edges {
              node {
                data {
                  Name
                  Slug
                  Categories {
                    data {
                      Name
                      Slug
                    }
                  }
                }
              }
            }
          }
      }
    `
  )
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  // Create pages for each markdown file.
  const categoryTemplate = path.resolve(`src/templates/category.js`);
  const productTemplate = path.resolve(`src/templates/product.js`);

  result.data.categories.edges.forEach(({ node }) => {
    createPage({
      path: `category/${node.data.Slug}`,
      component: categoryTemplate,
      context: node.data
    })
  })
  result.data.products.edges.forEach(({ node }) => {
    createPage({
      path: `product/${node.data.Slug}`,
      component: productTemplate,
      context: node.data
    })
  })
}
