import React, {useContext} from 'react'
import {Context} from "../Context"
import "./beerimage.css" 

function BeerImage({data}) {
	const {addToBeer, subToBeer, beer} = useContext(Context)

	let count = {0:0};

	beer.forEach(function(i) { count[i] = (count[i]||0) + 1;})

	return (
		<div>
			<img src={data.url} />
			<p> {data.title} </p>
			<i className="ri-add-circle-line cart" onClick={() => addToBeer(data.id)}></i>
			<i className="ri-indeterminate-circle-line" onClick={() => subToBeer(data.id)}></i>
			{count[data.id] ? <h1>{`thanks for ${count[data.id]} ${data.title}`}</h1> : <h1>Thanks for nothing</h1>}
		</div>
	)
}

export default BeerImage