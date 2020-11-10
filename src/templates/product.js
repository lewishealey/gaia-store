import React from "react"

function Product({ pageContext }) {
  return (
    <div>
        <h1>{pageContext.Name}</h1>
    </div>
  )
}


export default Product;
