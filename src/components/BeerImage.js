import React, {useContext} from 'react'
import {Context} from "../Context"
import "./beerimage.css" 

const BeerImage = ({data}) => {
	const {addToBeer, subToBeer, beer} = useContext(Context)

	let count = {0:0};

	beer.forEach((i) => { count[i] = (count[i]||0) + 1;})

	return (
		<div>
			<img src={data.url} alt={data.title} />
			<p> {data.title} </p>
			<i className="ri-add-circle-line cart" onClick={() => addToBeer(data)}></i>
			<i className="ri-indeterminate-circle-line" onClick={() => subToBeer("meh")}></i>
			<div>{data.id}</div>
			<div>{data.qty ? <div>{data.id}</div> : <div>you got no beer here</div> }</div>
		</div>
	)
}

export default BeerImage