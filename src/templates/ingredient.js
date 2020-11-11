import React from "react"
import { Link } from "gatsby"
import Layout from "@layout"

function Ingredient({ pageContext }) {
    console.log(pageContext.Countries)
  return (
    <Layout>
        <h1>{pageContext.Name}</h1>
        <p><Link to="/ingredients">Back to ingredients</Link></p>
        <ul>
            <li>Where it comes from: {pageContext.Where_it_comes_from}</li>
            <li>Product Type: {pageContext.Product_Type ? pageContext.Product_Type.map((type) => {
                    return <span>{type}, </span>;
                }): null}
            </li>
            <li>Countries: {pageContext.Countries ? pageContext.Countries.map((country) => {
                    return <span>{country}, </span>;
                }): null}
            </li>
            <li>Issues: {pageContext.Issues ? pageContext.Issues.map((issue) => {
                    return <span>{issue}, </span>;
                }): null}
            </li>
        </ul>
    </Layout>
  )
}


export default Ingredient;
