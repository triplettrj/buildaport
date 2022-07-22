import React from 'react'
import {Context} from "../Context"
import { useContext } from 'react'

const Cart = () => {
	const {beerCart} = useContext(Context)

	const cartElements = beerCart.map(item => 
        <div>
            {`${item.title} ${item.qty} `}
        </div> 
    )

	return (
		<div>
			{
			beerCart.length === 0 ? 
			<div>beerCart is EMPTY so go back to BUYMEABEER page NOW</div> :
			<div>{cartElements}</div>
			}
		</div>
	)
}

export default Cart