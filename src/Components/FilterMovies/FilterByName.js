import React from 'react'
import { Form } from 'react-bootstrap'
import './FilterByName.css'
const FilterByName = ({inputsearch,setInputsearch}) => {
  return (
    <div className='searchbar'>
        <Form.Control type="text" 
        placeholder="Enter movie name" 
        value={inputsearch}
         onChange={(e)=>setInputsearch(e.target.value)} />
    </div>
  )
}

export default FilterByName
