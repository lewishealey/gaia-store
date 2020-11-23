import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet";
import Layout from "@layout"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import slugify from "slugify"
import Arrow from "../images/arrow-right.svg"

function Product({ pageContext }) {

    console.log(pageContext);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <Layout>
        <Helmet>
            <title>{pageContext.Meta_Title}</title>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow, max-snippet:-1 max-image-preview:large, max-video-preview:-1"></meta>
            <meta property="og:locale" content="en_GB"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:title" content={pageContext.Meta_Title} />
            <meta property="og:description" content={pageContext.Meta_Description}></meta>
            <meta property="og:url" content="https://savegaia.store/"></meta>
            <meta property="og:site_name" content="Gaia"></meta>

            <script type="application/ld+json">
            { {
            "@context": "http://schema.org",
            "@type": "Product",
            "brand": pageContext.Brand,
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "2"
            },
            "description": pageContext.Meta_Description,
            "name": pageContext.Name,
            "image": "https://850708.smushcdn.com/1870892/wp-content/uploads/2020/01/81405081_585260055604412_802524595292087944_n-522x522.jpg?lossy=0&amp;strip=1&amp;webp=1",
            "offers": {
                "@type": "Offer",
                "availability": "http://schema.org/InStock",
                "price": "9.99",
                "priceCurrency": "GBP"
            }
            }}
        </script>
        </Helmet>

        {pageContext.Thumbnail ?
            <Slider {...settings} className="product__slider">
                {pageContext.Thumbnail.map((thumbnail) => {
                    return <div><img src={thumbnail.thumbnails.large.url} className="product__thumbnail"/></div>
                })}
            </Slider> : <img src="http://placehold.it/350x350" />}

        <div className="colour-text-brand">{pageContext.Brand}</div>
        <h1 className="product__title">{pageContext.Name}</h1>

        <div className="btn__group">
            <button className="btn">Add to cart</button>
            <button className="btn btn--fade">Add to wishlist</button>
        </div>

        {pageContext.Insights &&
            <section className="product__section">
                <h3 className="product__section__title">⚡ Your eco insights</h3>
                <p>We personally vet the entire supply chain to give you an honest and simple rating. Learn more</p>
                <ul>
                {pageContext.Insights ? pageContext.Insights.map((insight) => {
                    return <li>{insight.data.Title}</li>;
                }): null}
                </ul>
            </section>
        }

        {pageContext.Considerations &&
            <section className="product__section">
                <h3 className="product__section__title">Considerations</h3>
                <ul>
                {pageContext.Considerations ? pageContext.Considerations.map((consideration) => {
                    return <li>{consideration.data.Title}</li>;
                }): null}
                </ul>
            </section>
        }

        {pageContext.Ingredients &&
            <section className="product__section">
                <h3 className="product__section__title">Ingredients</h3>
                <ul className="product__ingredients">
                {pageContext.Ingredients ? pageContext.Ingredients.map((ingredient) => {
                    return <Link to={`/ingredient/${slugify(ingredient.data.Name, {
                        lower: true
                    })}`}><li>{ingredient.data.Name} <img src={Arrow} alt="arrow" /></li></Link>;
                }): null}
                </ul>
            </section>
        }

        <section>
            <h3 className="product__section__title">Community & Reviews</h3>
            <p>Reviews section</p>
        </section>
        <section>
            <h3 className="product__section__title">Other products you may like</h3>
            <p>Reviews section</p>
        </section>
    </Layout>
  )
}


export default Product;
