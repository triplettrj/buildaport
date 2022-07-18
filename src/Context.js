import React, {useState, useEffect} from 'react'
import data from "./beerstuff/data.js"

const Context = React.createContext()


function ContextProvider(props) {
	const [beerData, setBeerData] = useState([]) 
	const [beerCart, setBeer] = useState([]) 

	const urlbeer = "https://raw.githubusercontent.com/triplettrj/buildaport/main/beerData.json"

	useEffect(() => { //fetch json from my github to get data object to populate Beerimage.js components
			fetch(urlbeer)
				.then(res => res.json())
				.then(data => setBeerData(data))
	}, [])

    const addToBeer = (newBeer) => { //onclick from add to cart and + buttons send beerData of that beer 
		const isClickedNewBeer = item => item.id === newBeer.id //callback fxn to check if the onclicked beer is in the beerCart array 
	
		const exist = beerCart.find(isClickedNewBeer) //if the onclicked exists in the beerCart then exist will equal that beerCart item
			if (exist) { //and if exists then then map will only change the qty by 1 that has the item with the same id
				setBeer(beerCart.map( item => item.id === newBeer.id ? {...exist, qty: exist.qty +1} : item)) //if the item exists then change the quantity by 1 otherwise keep that item
			} 
			else { //exist will be null, which means the onclicked beer is not in the cart, and go here to add it to the cart with an additional property of qty equal to 1 
				setBeer([...beerCart, {...newBeer, qty: 1}])
			}
    }
    
    const subToBeer = (newBeer) => {
		const isClickedNewBeer = item => item.id === newBeer.id //callback fxn to check if the on clicked beer is in the beerCart array 
	
		const exist = beerCart.find(isClickedNewBeer)

		if (exist.qty === 1) { //if only 1 left in the cart then the beerCart will be replaced with a new array with only item.id not equal to the onclicked id
			setBeer(beerCart.filter(item => item.id !== newBeer.id)) 
		} 
		else { //the only other critera (bc the beerCart item only renders if qty>0) will change the qty of the onclicked id by -1
			setBeer(beerCart.map(item => item.id === newBeer.id ? {...exist, qty: exist.qty -1 } : item))
		}	
    }

    return (
        <Context.Provider value={{beerData, addToBeer, subToBeer, beerCart}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}