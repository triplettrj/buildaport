import React, {useContext} from 'react'
import {Context} from "../Context"
import "./beerimage.css" 

const BeerImage = ({data}) => {
	const {addToBeer, subToBeer, beer} = useContext(Context)

	return (
		<div>
			<img src={data.url} alt={data.title} />
			<p> {data.title} </p>
			<i className="ri-add-circle-line cart" onClick={() => addToBeer(data)}></i>
			<i className="ri-indeterminate-circle-line" onClick={() => subToBeer("meh")}></i>
			<div>{data.qty ? <div>{data.qty}</div> : <div>you got no beer here</div> }</div>
		</div>
	)
}

export default BeerImage