import React, {useContext} from 'react'
import RickandMortyComp from "../components/RickandMortyComp"
import {Context} from "../Context"
import "../styles.css" 

function RickandMorty() {
   const {ramPhotos} = useContext(Context)
   console.log(ramPhotos)
   const imageElements = ramPhotos.map(function(data) { return(
       <RickandMortyComp data={data} />
   )})

   //please enter the name of your first
    
    return (
        <main className="parent">
            {imageElements}
        </main>
    )
}

export default RickandMorty

