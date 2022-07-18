import React, {useContext} from 'react'
import BeerImage from "../components/BeerImage"
import {Context} from "../Context"
import "../styles.css"

const BuyMeABeer = () => {
	const {beerData, beerCart, subToBeer, addToBeer} = useContext(Context)

    const beerElements = beerData.map((item, i) => <BeerImage key={i} data={item} />)

    const cartElements = beerCart.map(item => 
        <div>
            {`${item.title} ${item.qty} thanks dude `}  
            <button onClick={() => addToBeer(item)}>+</button>                  
            <button onClick={() => subToBeer(item)}>-</button>
        </div> 
    )
    
    return (
        <main className="parent">
            {beerElements}
            <div>
                beerCart
                {
                beerCart.length === 0 ? 
                <div>beerCart is EMPTY and i am thirsty</div> :
                <div>{cartElements}</div>
                }
            </div>
        </main>
    )
}

export default BuyMeABeer
