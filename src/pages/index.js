import React from "react"
import { Link } from "gatsby"

import Layout from "@layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Gaia</h1>
    <Link to="/products/">Products</Link> <br />
    <Link to="/ingredients/">Ingredients</Link>
  </Layout>
)

export default IndexPage
