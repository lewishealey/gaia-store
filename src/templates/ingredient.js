import React from "react"
import { Link } from "gatsby"
import Layout from "@layout"
import rating from "../images/rating.svg"

function Ingredient({ pageContext }) {
    console.log(pageContext)
  return (
    <Layout>
        <div className="ingredient" style={{backgroundColor: pageContext.Background, color: pageContext.TextColour === "Light" ? "#FFFFFF" : "#1A202C"}}>
        <h1 className="ingredient__title">{pageContext.Name}</h1>

        <img src={rating} alt="ratnig" className="ingredient__rating"/>

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
                    <h3 className="ingredient__section__title">Quick facts</h3>
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

        {pageContext.Products &&
        <section className="product__section">
            <h3 className="ingredient__section__title">Common products</h3>
            <ul className="product-group">
                {pageContext.Products.map((product, i) => {
                    return <li key={`product-${i}`}>
                        <Link to={`/product/${product.data.Slug}`}>
                            <img src="http://placehold.it/160x160" className="product-group__thumbnail"/>
                            <span className="product-group__brand">{product.data.Brand}</span>
                            <h4 className="product-group__title">{product.data.Name}</h4>
                        </Link>
                    </li>;
                })}
            </ul>
        </section>
        }
    </Layout>
  )
}


export default Ingredient;
