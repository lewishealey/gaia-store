import React from "react"
import { Link } from "gatsby"
import Layout from "@layout"
import rating from "../images/rating.svg"

//https://incidecoder.com/products/pixi-glow-tonic-discontinued-2

function Ingredient({ pageContext }) {
  return (
    <Layout>
        <div className="ingredient" style={{backgroundColor: pageContext.Background, color: "#1A202C"}}>
        <h1 className="ingredient__title">{pageContext.Name}</h1>

        <ul className="ingredient__summary">
            <li>
                <span className="ingredient__summary__label">Where it comes from</span>
                {pageContext.Where_it_comes_from}
            </li>
            <li>
                <span className="ingredient__summary__label">Product type</span>
                {pageContext.Product_Type ? pageContext.Product_Type.map((type) => {
                    return <span>{type} </span>;
                }): null}
            </li>
            <li>
                <span className="ingredient__summary__label">Countries of origin</span>
                {pageContext.Countries ? pageContext.Countries.map((country) => {
                    return <span>{country}, </span>;
                }): null}
            </li>
            <li>
                <span className="ingredient__summary__label">Potential issues</span>
                {pageContext.Issues ? pageContext.Issues.map((issue) => {
                    return <span>{issue}, </span>;
                }): 'None!'}
            </li>
        </ul>
        </div>
        {/* <p><Link to="/ingredients">Back to ingredients</Link></p> */}

        {pageContext.Questions &&
            <section className="product__section">
                    <h3 className="ingredient__section__title">Common questions</h3>
                    <ul className="question__list">
                        {pageContext.Questions.map((question) => {
                            return <li className="question">
                                <h4 className="question__title">{question.data.Title}</h4>
                                <p className="question__answer">{question.data.Answer}</p>
                            </li>;
                        })}
                    </ul>
            </section>
        }
    </Layout>
  )
}


export default Ingredient;
