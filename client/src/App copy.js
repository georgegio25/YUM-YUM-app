//copy before trying to put everuthing in one app

import React, {useState} from 'react' // #1 rafce
import Axios from 'axios' // #3 Don't forget to npm i axios first
import Dish from "./components/Dish"
import { v4 as uuidv4 } from 'uuid' // #21
import { BrowserRouter, Routes, Route, Link } from "react-router-dom" // #22 Importing dependencies for our routing ( need to npm install react-router-dom@6 )
import Details from "./components/Details"
import AllDishes from "./components/AllDishes"



function App() {
    return (
    <div>
        <BrowserRouter> {/* #23 Wrap everything in router in order to use routes */}
           
            <Routes> 
                <Route path="/" element = {<AllDishes />} />
                <Route path="/about/:label" element = {<Details />}/>            
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

//<div> 
 //           {dishes !== []&&dishes.map(whatever => 
//                <img src={whatever.recipe.image} />
 //               )} 
 //       </div>

export default App
