import React, {useContext} from 'react'
import {Context} from "../Context"
import "./beerimage.css" 

const BeerImage = ({data}) => {
	const {addToBeer} = useContext(Context)

	return (
		<div>
			<img src={data.url} alt={data.title} />
			<p> {data.title} </p>
			<button onClick={() => addToBeer(data)}>add to cart</button>
		</div>
	)
}

//<i className="ri-indeterminate-circle-line" onClick={() => subToBeer(data)}></i>}
//<i className="ri-add-circle-line cart" onClick={() => addToBeer(data)}></i>

export default BeerImage