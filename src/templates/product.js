import React from "react"
import Layout from "@layout"

function Product({ pageContext }) {

    console.log(pageContext);

  return (
    <Layout>
        <img src="http://placehold.it/350x350" />
        <div className="colour-text-brand">{pageContext.Brand}</div>
        <h1>{pageContext.Name}</h1>

        <div className="btn__group">
            <button className="btn">Add to cart</button>
            <button className="btn">Add to wishlist</button>
        </div>

        <section>
            <h2>⚡ Your eco insights</h2>
            <p>We personally vet the entire supply chain to give you an honest and simple rating. Learn more</p>
            <ul>
            {pageContext.Insights ? pageContext.Insights.map((insight) => {
                return <li>{insight.data.Title}</li>;
            }): null}
            </ul>
        </section>
        <section>
            <h2>Considerations</h2>
            <ul>
            {pageContext.Considerations ? pageContext.Considerations.map((consideration) => {
                return <li>{consideration.data.Title}</li>;
            }): null}
            </ul>
        </section>
        <section>
            <h2>Ingredients</h2>
            <ul>
            {pageContext.Ingredients ? pageContext.Ingredients.map((ingredient) => {
                return <li>{ingredient.data.Name}</li>;
            }): null}
            </ul>
        </section>
        <section>
            <h2>Community & Reviews</h2>
            <p>Reviews section</p>
        </section>
        <section>
            <h2>Other products you may like</h2>
            <p>Reviews section</p>
        </section>
    </Layout>
  )
}


export default Product;
