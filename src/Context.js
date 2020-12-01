import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props) {
	const [ramPhotos, setRamPhotos] = useState([])
	const [beerPhotos, setBeerPhotos] = useState([])
	const [beer, setBeer] = useState([])

	const urlram = "https://rickandmortyapi.com/api/character/1,2,3,4,5"
	const urlbeer = "https://raw.githubusercontent.com/triplettrj/buildaport/main/beerstuff/beerimagesjson.json"

	useEffect(() => {
			fetch(urlram)
				.then(res => res.json())
				.then(data => setRamPhotos(data))

			fetch(urlbeer)
				.then(res => res.json())
				.then(data => setBeerPhotos(data))
	}, [])

    function addToBeer(newBeer) {
        setBeer(prevBeer => [...prevBeer, newBeer]) //This accepts the id of beerPhotos and adds it to beer 
    }

    function subToBeer(newBeer) {
    	alert("sorry not sorry cannot take away beer");
    }

    return (
        <Context.Provider value={{ramPhotos, beerPhotos, addToBeer, subToBeer, beer}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}