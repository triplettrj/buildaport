import React from 'react'
import { Link } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import BuyMeABeer from "../pages/BuyMeABeer"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import PropTypes from 'prop-types'


function Header(props) {
	return (
		<header>
			<Link to="/"><h2>Home</h2></Link>
			<Link to="/about"><h2>About</h2></Link>
			<Link to="/buymeabeer"><h2>BuyMeABeer</h2></Link>
			<Link to="/blog"><h2>Blog</h2></Link>
			<Link to="/contact"><h2>Contact</h2></Link>
		</header>
	)
}

Header.propTypes = {

}

export default Header
