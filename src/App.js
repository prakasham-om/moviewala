import React from "react"
import SingleMovie from "./component/SingleMovie";
import Home from "./component/Home";
import "./App.css"
import {Routes,Route} from "react-router-dom";
import Favourite from "./component/Favourite";
const App=()=>{
  return(
    <>
    
     <Routes>
      <Route  path="/"  element={<Home/>} exact />
      <Route path="movie/:id" element={<SingleMovie/>}/>
      <Route  path="/fav"  element={<Favourite/>}/>   
     </Routes>
     
      
    </>
  )
}
export default App;