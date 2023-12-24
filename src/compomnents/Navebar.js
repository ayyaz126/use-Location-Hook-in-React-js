import React,{useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navebar() {
   let locat = useLocation();
     useEffect(() => {
        console.log(locat)
      }, [locat]);
    
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      <Link class="nav-link" to="/abt">About</Link>
      <Link class="nav-link" to="/con">Contact</Link>
      <Link class="nav-link" to="/loc">Location</Link>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navebar