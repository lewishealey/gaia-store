const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hellohuman/gaia/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hellohuman/gaia/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/hellohuman/gaia/src/pages/index.js"))),
  "component---src-pages-ingredients-js": hot(preferDefault(require("/Users/hellohuman/gaia/src/pages/ingredients.js"))),
  "component---src-pages-products-js": hot(preferDefault(require("/Users/hellohuman/gaia/src/pages/products.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/hellohuman/gaia/src/pages/using-typescript.tsx"))),
  "component---src-templates-category-js": hot(preferDefault(require("/Users/hellohuman/gaia/src/templates/category.js"))),
  "component---src-templates-ingredient-js": hot(preferDefault(require("/Users/hellohuman/gaia/src/templates/ingredient.js"))),
  "component---src-templates-product-js": hot(preferDefault(require("/Users/hellohuman/gaia/src/templates/product.js")))
}

