import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"
import Menu from "../images/menu.svg"
import Cart from "../images/cart.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={Logo} width="72" alt="Gaia logo"/>
        </Link>

        <div className="header__actions">
            <img src={Menu} height="16" alt="Menu icon"/>
            <img src={Cart} height="28" alt="Cart icon"/>
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
