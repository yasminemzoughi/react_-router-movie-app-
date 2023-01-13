import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'; 
import './ADD.css'

const ADD = ({addMovie}) => {
  const [show, setShow] = useState (false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //initial state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [poster, setPoster] = useState("");
//update  state
const handleTitle = (e)=> {
  setTitle(e.target.value);};

  const handleDescription = (e)=> {
  setDescription(e.target.value);};

  const handleRate = (e)=> {
  setRate(e.target.value);};

  const handlePoster = (e)=> {
  setPoster(e.target.value);
};
// function add movie
const handleMovie =(e)=>{
let newMovie  = {title, description, rate, poster}
addMovie(newMovie);
handleClose();
}
  return (
    <div className='mod'>
        <Button  variant="primary" onClick={handleShow}>
        Add a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Add a movie </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form.Label>Movie title</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter Movie title" 
        value={title}
         onChange={handleTitle} />

        <Form.Label>Movie description</Form.Label>
        <Form.Control type="text"
         placeholder="Enter Movie description"
          value={description}
          onChange={handleDescription} />

        <Form.Label>Movie Rate</Form.Label>
        <Form.Control type="number"
         placeholder="Enter Movie Rate" 
         value={rate} 
         onChange={handleRate}/>

        <Form.Label>Movie Poster</Form.Label>
        <Form.Control type="url" 
        placeholder="Enter Movie Poster" 
        value={poster}
        onChange={handlePoster}/>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleMovie}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ADD
