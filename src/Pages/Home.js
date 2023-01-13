import React from 'react'
import {Routes, Route} from 'react-router';
import Contact from '../Pages/Contact'
import Error from '../Pages/Error'
import  App  from '../App';
import Description from '../Pages/Description'

const Home = () => {
  return (
    <div>
       <Routes>
       <Route path="/Home" element= {<App/>}/>
    <Route path="/contact" element= {<Contact/>}/>
    <Route path="/Description/:id" element= {<Description />}/>
    <Route path="/*" element= {<Error/>}/>
   </Routes>
    </div>
  )
}

export default Home
