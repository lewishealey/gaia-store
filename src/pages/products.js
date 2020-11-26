import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "@layout"
import SEO from "../components/seo"

const Products = ({data}) => (
  <Layout>
    <SEO title="Products" />
    <h1>Products</h1>

    <ul className="product-list">
    {data.products ? data.products.edges.map((product) => {
        return <li>
            <Link to={`/product/${product.node.data.Slug}`}>
                {product.node.data.Thumbnail ?
                    <div>
                        <img src={product.node.data.Thumbnail[0].thumbnails.large.url} className="product-list__thumbnail"/>
                    </div>
                : <div>
                <img src="https://via.placeholder.com/450/450" className="product-list__thumbnail"/>
            </div>}
                <h4 className="product-list__title">{product.node.data.Name}</h4></Link></li>;
    }): null}
    </ul>
  </Layout>
)


export default Products;

export const query = graphql`
  query ProductsQuery {
    products: allAirtable(filter: {queryName: {eq: "ProductData"}}) {
        edges {
          node {
            id
            data {
              Name
              Slug
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
            }
            queryName
          }
        }
      }
 }
`
