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
                      Ingredients {
                          data {
                              Name
                          }
                      }
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
                    Price
                    Ingredients {
                        data {
                            Name
                        }
                    }
                    Considerations {
                        data {
                            Icon {
                                thumbnails {
                                    full {
                                      url
                                    }
                                }
                            }
                            Title
                            Description
                        }
                    }
                    Insights {
                        data {
                            Icon {
                                thumbnails {
                                    full {
                                      url
                                    }
                                }
                            }
                            Title
                            Description
                        }
                    }
                    Brand
                    Thumbnail {
                      thumbnails {
                        full {
                          url
                          width
                          height
                        }
                        large {
                          url
                          width
                          height
                        }
                        small {
                          url
                          width
                          height
                        }
                      }
                    }
                    Categories {
                      data {
                        Name
                      }
                    }
                    Reviews
                  }
                }
              }
            }

            ingredients: allAirtable(filter: {queryName: {eq: "IngredientData"}}) {
                edges {
                  node {
                    id
                    queryName
                    data {
                        Name
                        Redflag
                        Product_Type
                        Where_it_comes_from
                        What_it_does__deodorant_
                        Questions_to_ask
                        Combination_of
                        Countries
                        Issues
                        Growing_notes
                        Ease_of_verification
                        Toxicity
                        Produced_as_a_byproduct_
                        Where_it_comes_from
                        Production_method
                        Notes
                        SEO_Keywords
                        Background
                        TextColour
                        Questions {
                            data {
                              Title
                              Answer
                            }
                          }
                        Products {
                            id
                            data {
                            Name
                            Slug
                            Brand
                            Thumbnail {
                                thumbnails {
                                  large {
                                    url
                                  }
                                }
                              }
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
  const ingredientTemplate = path.resolve(`src/templates/ingredient.js`);

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
  result.data.ingredients.edges.forEach(({ node }) => {
    createPage({
      path: `ingredient/${string_to_slug(node.data.Name)}`,
      component: ingredientTemplate,
      context: node.data
    })
  })
}



function string_to_slug (str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();

    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes

    return str;
}
