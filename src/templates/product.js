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
            <title>{pageContext && pageContext.Meta_Title}</title>
            <meta charSet="utf-8" />
            <meta name="robots" content="index, follow, max-snippet:-1 max-image-preview:large, max-video-preview:-1"></meta>
            <meta property="og:locale" content="en_GB"></meta>
            <meta property="og:type" content="website"></meta>
            <meta property="og:title" content={pageContext && pageContext.Meta_Title} />
            <meta property="og:description" content={pageContext && pageContext.Meta_Description}></meta>
            <meta property="og:url" content="https://savegaia.store/"></meta>
            <meta property="og:site_name" content="Gaia"></meta>
        </Helmet>

        {pageContext.Thumbnail ?
            <Slider {...settings} className="product__slider">
                {pageContext.Thumbnail.map((thumbnail) => {
                    return <div><img src={thumbnail.thumbnails.large.url} className="product__thumbnail" alt="Thumbnail"/></div>
                })}
            </Slider> : <img src="https://place-hold.it/450x450/f3f3f3/f3f3f3" className="product-list__thumbnail" alt="Thumbnail"/>}

        <div className="colour-text-brand">{pageContext.Brand}</div>
        <h1 className="product__title">{pageContext.Name}</h1>

        {pageContext.Prices &&
            <select className="select">
                {pageContext.Prices.map((price) =>{
                    return <option>{price.data.Name} - £{price.data.Price}.00</option>
                })}
            </select>
        }

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
                    })}`}><li>{ingredient.data.Name} <img src={Arrow} alt="Arrow"/></li></Link>;
                }): null}
                </ul>
            </section>
        }

        {pageContext.Reviews &&
        <section>
            <h3 className="product__section__title">Community & Reviews</h3>
            <ul className="reviews__list">
                {pageContext.Reviews.map((review) => {
                        return <li className="reviews__item">
                            <div className="reviews__item__bio">
                                {review.data.Thumbnail &&
                                    <div className="reviews__item__thumbnail">
                                        <img src={review.data.Thumbnail[0].url} className="reviews__item__thumbnail-img" alt="Thumbnail" />
                                    </div>
                                }
                                <div className="reviews__item__summary">
                                    <h3 className="reviews__item__name">{review.data.Name}</h3>
                                    <h4 className="reviews__item__job">{review.data.Job}</h4>
                                </div>
                            </div>
                            <div className="reviews__item__description">
                                "{review.data.Description}"
                            </div>
                        </li>;
                })}
            </ul>
        </section>
        }

        <section>
            <h3 className="product__section__title">Other products you may like</h3>
            <p>Reviews section</p>
        </section>
    </Layout>
  )
}


export default Product;
