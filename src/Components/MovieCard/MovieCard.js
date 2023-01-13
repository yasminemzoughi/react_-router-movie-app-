import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './MovieCard.css'
import MovieRating from "../Rate/Rating"
import { Link} from 'react-router-dom';
const MovieCard = ({movie}) => {

  return (
    <div className='cardss'>
       <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        <MovieRating  isMovieRating={true} movieRating={movie.rate}/>
        <span>
        <Link to={`/Description/${movie.id}`} ><Button variant="dark" style={{margin:'2%' }} > See description</Button></Link>      
        </span>
        <span>
     <Button variant="dark" style={{ color:'red' }} ><a href={movie.trailer} target={"blanck"}>
          see trailer</a> 
          </Button>      
        </span>
      </Card.Body>
    </Card>
    </div> 
  )
}

export default MovieCard
