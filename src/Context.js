import React, {useState, useEffect} from 'react'
import data from "./beerstuff/data.js"

const Context = React.createContext()

function ContextProvider(props) {
	const [beerData, setBeerData/* to use in the useEffect below to fetch data from my github*/
								] = useState(data)
	const [beer, setBeer] = useState([]) //the beer cart

	let yo = ''

    const addToBeer = (newBeer) => {
		const isClickedNewBeer = (item, newBeer) => item.id === newBeer.id
		
		const exist = beer.find(isClickedNewBeer)//this is fucked and is always false
			if (exist){
				yo = 'true'
			}else {yo = 'false' }
			if (exist) {
				setBeer(
					beer.map( item => 
						item.id === newBeer.id ? {...exist, qty: exist.qyt +1} : item)
				)
			} 
			else {
				setBeer([...beer, {...newBeer, qty: 1}])
			}

		console.log('this is beer  ', beer) 
		console.log('this is exist  ', exist) 
    }
    


    function subToBeer(newBeer) {
		alert("sorry not sorry cannot take away beer");
    }

    return (
        <Context.Provider value={{beerData, addToBeer, subToBeer, beer}}>
            {props.children}
        </Context.Provider>
    )
}

/*
	const [ramPhotos, setRamPhotos] = useState([])

	const urlram = "https://rickandmortyapi.com/api/character/1,2,3,4,5"
	const urlbeer = "https://raw.githubusercontent.com/triplettrj/buildaport/main/beerData.json"

	useEffect(() => {
			fetch(urlram)
				.then(res => res.json())
				.then(data => setRamPhotos(data))
			fetch(urlbeer)
				.then(res => res.json())
				.then(data => setBeerData(data))
	}, [])


	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
			if (exist) {
				setCartItems(
					cartItems.map((x) =>
						x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
					)
				)
			} else {
		setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	}
	*/

export {ContextProvider, Context}