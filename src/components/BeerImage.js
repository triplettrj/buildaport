import React, {useContext} from 'react'
import {Context} from "../Context"
import "./beerimage.css" 

<<<<<<< HEAD
function BeerImage({data}) {
=======
const BeerImage = ({data}) => {
>>>>>>> master
	const {addToBeer, subToBeer, beer} = useContext(Context)

	let count = {0:0};

<<<<<<< HEAD
	beer.forEach(function(i) { count[i] = (count[i]||0) + 1;})

	return (
		<div>
			<img src={data.url} />
			<p> {data.title} </p>
			<i className="ri-add-circle-line cart" onClick={() => addToBeer(data.id)}></i>
			<i className="ri-indeterminate-circle-line" onClick={() => subToBeer(data.id)}></i>
			{count[data.id] ? <h1>{`thanks for ${count[data.id]} ${data.title}`}</h1> : <h1>Thanks for nothing</h1>}
=======
	beer.forEach((i) => { count[i] = (count[i]||0) + 1;})

	return (
		<div>
			<img src={data.url} alt={data.title} />
			<p> {data.title} </p>
			<i className="ri-add-circle-line cart" onClick={() => addToBeer(data)}></i>
			<i className="ri-indeterminate-circle-line" onClick={() => subToBeer("meh")}></i>
			<div>{data.id}</div>
			<div>{data.qty ? <div>{data.id}</div> : <div>you got no beer here</div> }</div>
>>>>>>> master
		</div>
	)
}

export default BeerImage