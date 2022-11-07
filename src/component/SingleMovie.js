import { NavLink, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import "./singlepagefet.css";


const SingleMovie = () => {

  const { id } = useParams();
  //console.log(id);
  
  const { isLoading, movie, isError } = useFetch(`&i=${id}`);
  const [addMovie,setAddMovie]=useState([]);
  console.log(movie)
   


  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="loading">Loading....</div>;
      </section>
    );
  }
  const name=movie.Title;
  const imgg=movie.Poster;

  return (
    
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={imgg} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{name}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        
        
        <button className="add-btn" onClick={()=>{
          const AddMovie=[...addMovie,[
            <h1>{name}</h1>,
            <img src={imgg} alt="" />
          ]];
            setAddMovie(AddMovie);
            console.log(AddMovie)
           
              
            }

        }>add watchlist</button>
        
    
      {addMovie.map((item,index)=>{
              console.log(item)
            
              return<li>{item} </li>
          
          
              } )}
        
     
              

      
        </div>
      </div>
      
      
    
    </section>

    
  );
};

export default SingleMovie;