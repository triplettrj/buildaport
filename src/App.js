import React from 'react'
import {Switch, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import BuyMeABeer from "./pages/BuyMeABeer"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
<<<<<<< HEAD
import RickandMorty from "./pages/RickandMorty"
=======
import Cart from "./pages/Cart"
>>>>>>> master
import "./styles.css" 


function App() {
  return (
    <div className="pancake">
      <Header />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/buymeabeer">
            <BuyMeABeer />
        </Route>
<<<<<<< HEAD
        <Route path="/RickandMorty">
            <RickandMorty />
=======
        <Route path="/cart">
            <Cart />
>>>>>>> master
        </Route>
        <Route path="/blog">
            <Blog />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
