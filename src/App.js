import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import { moviesData } from './Components/Data';
import ADD from './Components/ADD/ADD';
import FilterByName from './Components/FilterMovies/FilterByName';
import FilterByRate from './Components/Rate/Rating';


function App() {

  const [movies, setMovies] = useState(moviesData)
const addMovie=(newMovie)=> {
  setMovies([...movies,newMovie])
}
//filter by name input searchBar
const [inputsearch, setInputsearch] = useState("")
//filter by rate
const [rating, setRating] = useState(1);


  return (
    <div className="App" 
    >
   
      <NavBar/> 

      <FilterByName 
      inputsearch={inputsearch} 
       setInputsearch={setInputsearch}
       />

 <FilterByRate 
 isMovieRating={false} 
 rating={rating}
  setRating={setRating}
   />

      <ADD addMovie={addMovie}/>

      <MovieList movies={movies}
       inputsearch={inputsearch} 
       rating={rating}/>
      



    </div>
  );
}

export default App;
