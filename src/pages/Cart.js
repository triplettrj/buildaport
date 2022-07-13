import React from 'react'
import {Context} from "../Context"
import { useContext } from 'react'

const Cart = () => {
	const {beer} = useContext(Context)
	return (
		<div>
			{beer.length === 0 && <div>Cart is EMPTY and i am thirsty</div> }
		</div>
	)
}

export default Cart