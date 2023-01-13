import React, { useState, useEffect} from 'react'
import { Button, Card } from 'react-bootstrap'

import { useParams, Link } from 'react-router-dom'
import {moviesData} from '../Components/Data'

const Description = () => {
 const [descrip, setDescrip] = useState({})
    const {id}=useParams()
    useEffect(() => {
       const movieD = moviesData.find((el)=>el.id==id)
    setDescrip(movieD);      
    })

  return (
    <div>
        <Card style={{ width: '18rem',  margin:'2%' }}>
        <Card.Body>
        <Card.Title>{descrip.title}</Card.Title>
        <Card.Img variant="top" src={descrip.posterUrl} />
        <Card.Text>{descrip.description} </Card.Text>
        <Link to ={'/Home'}><Button variant="dark">Go to home page</Button></Link>
      </Card.Body>
    </Card>

  
    </div>
  )
}

export default Description
