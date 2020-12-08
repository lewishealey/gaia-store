import React, {useState} from "react"
import { Link, graphql } from "gatsby"

import Layout from "@layout"
import SEO from "@seo"

const Index = ({data}) => {
    const [search, setSearch] = useState(null);

  return <Layout>
    <SEO title="Ingredients" />
    <h1>Ingredients info you can understand</h1>
    <h2>Subtitle here</h2>

    <div className="ingredient-list__search">
        <input className="input" placeholder={`Search all ${data.ingredients.edges.length} ingredients`}
        onKeyDown={(e) => {
            setSearch(e.target.value)
        }}
        onChange={(e) => {
            setSearch(e.target.value)
        }} value={search}/>
    </div>

    <div className="ingredient-list__searching">
        {search && <div>Searching for '{search}'</div>}
    </div>

    <ul className="ingredient-list">
    {data.ingredients ? data.ingredients.edges.map((ingredient) => {
    if(search && ingredient.node.data.Name.includes(search)) {
        return <li style={{backgroundColor: ingredient.node.data.Background ? ingredient.node.data.Background : "#E6F0ED"}}>
            <Link to={`/ingredient/${string_to_slug(ingredient.node.data.Name)}`}>
                <h4 className="product-group__title">{ingredient.node.data.Name}</h4>
            </Link>
        </li>;
    }
    if(!search) {
        return <li style={{backgroundColor: "#E6F0ED"}}>
            <Link to={`/ingredient/${string_to_slug(ingredient.node.data.Name)}`}>
                <h4 className="product-group__title">{ingredient.node.data.Name}</h4>
            </Link>
        </li>;
    }


    }): null}
    </ul>
  </Layout>
}



export default Index;

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
    ingredients: allAirtable(filter: {queryName: {eq: "IngredientData"}}, sort: {fields: data___Name, order: ASC}) {
        edges {
          node {
            id
            data {
              Name
              Background
            }
            queryName
          }
        }
      }
 }
`

