import React, {useContext} from 'react'
import BeerImage from "../components/BeerImage"
import {Context} from "../Context"
import PropTypes from 'prop-types'
import "../styles.css"

function BuyMeABeer(props) {
	const {beerPhotos} = useContext(Context)
    const imageElements = beerPhotos.map(function(data, i) { return(
        <BeerImage key={i} data={data} /> 
    )})
    
    return (
        <main className="parent">
            {imageElements}
        </main>
    )
}

BuyMeABeer.propTypes = {

}

export default BuyMeABeer
