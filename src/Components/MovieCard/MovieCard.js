import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './MovieCard.css'
import MovieRating from "../Rate/Rating"
const MovieCard = ({movie}) => {

  return (
    <div className='cardss'>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <MovieRating  isMovieRating={true} movieRating={movie.rate}/>
        <div>
                  <Button variant="primary">See trailer</Button>
        </div>

      </Card.Body>
    </Card>

      
    </div>
  )
}

export default MovieCard
