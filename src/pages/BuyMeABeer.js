import React, {useContext} from 'react'
import BeerImage from "../components/BeerImage"
import {Context} from "../Context"
import PropTypes from 'prop-types'
import "../styles.css"

<<<<<<< HEAD
function BuyMeABeer(props) {
	const {beerPhotos} = useContext(Context)
    const imageElements = beerPhotos.map(function(data, i) { return(
        <BeerImage key={i} data={data} /> 
=======
const BuyMeABeer = () => {
	const {beerData, beer} = useContext(Context)

    const imageElements = beerData.map((item, i) => { return(
        <BeerImage key={i} data={item} /> 
>>>>>>> master
    )})
    
    return (
        <main className="parent">
            {imageElements}
<<<<<<< HEAD
=======
            {beer.length === 0 && <div>Cart is EMPTY and i am thirsty</div>}
>>>>>>> master
        </main>
    )
}

BuyMeABeer.propTypes = {

}

export default BuyMeABeer
