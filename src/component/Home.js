import React from "react";
import Favourite from "./Favourite";
import Movies from "./Movies";
import Search from "./Search";
import { NavLink } from "react-router-dom";


const Home=()=>{

    return(
        <>

        <div className="container">
        
        <h1 className="name"><i>PRAKASH</i></h1>
       
        <NavLink  to="/fav" className="fav" >WATCHLIST</NavLink>
        <Search/>
        <Movies/>
        </div>
            
        </>
    )

}
export default Home;