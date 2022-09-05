import React, {useState} from 'react' 
import { BrowserRouter, Routes, Route} from "react-router-dom" 
import AllDishes from "./components/AllDishes"

function App() {
    
    return (
    <div>
        <BrowserRouter>            
            <Routes> 
                <Route path="/" element = {<AllDishes />} />
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App
