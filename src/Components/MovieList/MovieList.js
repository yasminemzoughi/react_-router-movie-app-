import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'


const MovieList = ({movies,inputsearch,rating}) => {
  return (
<div className='mov'>
      {movies
      .filter(movie =>
        movie.title.toLowerCase().includes(inputsearch.toLowerCase())&& 
        movie.rate>= rating)
      
      .map((movie)=>(
        <MovieCard movie={movie}  key ={movie.id}/>) )}
    </div>
  )
}

export default MovieList
