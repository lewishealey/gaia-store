import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "@layout"
import SEO from "../components/seo"

const Products = ({data}) => (
  <Layout>
    <SEO title="Products" />
    <h1>Products</h1>

    <ul>
    {data.products ? data.products.edges.map((product) => {
        return <li><Link to={`/product/${product.node.data.Slug}`}>{product.node.data.Name}</Link></li>;
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
            }
            queryName
          }
        }
      }
 }
`
