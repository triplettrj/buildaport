import React, {useContext} from 'react'
import BeerImage from "../components/BeerImage"
import {Context} from "../Context"
import PropTypes from 'prop-types'
import "../styles.css"

const BuyMeABeer = () => {
	const {beerData, beer} = useContext(Context)

    const imageElements = beerData.map((item, i) => { return(
        <BeerImage key={i} data={item} /> 
    )})
    
    return (
        <main className="parent">
            {imageElements}
            {beer.length === 0 && <div>Cart is EMPTY and i am thirsty</div>}
        </main>
    )
}

BuyMeABeer.propTypes = {

}

export default BuyMeABeer
