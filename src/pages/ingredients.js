import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Ingredients = ({data}) => (
  <Layout>
    <SEO title="Ingredients" />
    <h1>Ingredients</h1>

    <ul className="product-list">
    {data.ingredients ? data.ingredients.edges.map((ingredient) => {
        return <li>
            <Link to={`/ingredient/${string_to_slug(ingredient.node.data.Name)}`}>
            <img src="http://placehold.it/160x160" className="product-list__thumbnail"/>
                <h4 className="product-group__title">{ingredient.node.data.Name}</h4>
            </Link>
            </li>;
    }): null}
    </ul>
  </Layout>
)


export default Ingredients;

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


export const query = graphql`
  query IngredientsQuery {
    ingredients: allAirtable(filter: {queryName: {eq: "IngredientData"}}) {
        edges {
          node {
            id
            data {
              Name
            }
            queryName
          }
        }
      }
 }
`
