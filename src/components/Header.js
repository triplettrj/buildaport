import React from 'react'
import "./header.css" 
import { Link } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import BuyMeABeer from "../pages/BuyMeABeer"
import Blog from "../pages/Blog"
import Contact from "../pages/Contact"
import RickandMorty from "../pages/RickandMorty"
import PropTypes from 'prop-types'


function Header(props) {
	return (
		<header>
			<div className="container">
				<h1 class="logo"></h1>

				<nav>
					<ul>
						<li><Link to="/"><h2 className='box'>Home</h2></Link></li>
						<li><Link to="/about"><h2 className='box'>About</h2></Link></li>
						<li><Link to="/buymeabeer"><h2 className='box'>BuyMeABeer</h2></Link></li>
						<li><Link to="/RickandMorty"><h2 className='box'>RickandMorty</h2></Link></li>
						<li><Link to="/blog"><h2 className='box'>Blog</h2></Link></li>
						<li><Link to="/contact"><h2 className='box'>Contact</h2></Link></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

Header.propTypes = {

}

export default Header
