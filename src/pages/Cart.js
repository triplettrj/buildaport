import React from 'react'
<<<<<<< HEAD

function Cart() {
	return (
		<div>
			
=======
import {Context} from "../Context"
import { useContext } from 'react'

const Cart = () => {
	const {beer} = useContext(Context)
	return (
		<div>
			{beer.length === 0 && <div>Cart is EMPTY and i am thirsty</div> }
>>>>>>> master
		</div>
	)
}

export default Cart