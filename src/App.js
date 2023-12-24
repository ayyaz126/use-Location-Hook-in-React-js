import React from 'react'
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './compomnents/Home';
import About from './compomnents/About';
import Contact from './compomnents/Contact';
import Location from './compomnents/Location';
import Navebar from './compomnents/Navebar';

function App() {
  return (
    <div>
          <Router>
            <Navebar/>
           <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route path='/abt' element={<About/>}/>
            <Route path='/con' element={<Contact/>}/>
            <Route path='/loc'  element={<Location/>} />
          
           </Routes>
          </Router>
    </div>
  )
}

export default App