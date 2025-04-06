import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div className="nav-logo">
            
            <img src={"src/assets/logo.svg"} alt="nav-logo" width={100} height={100}/>

        </div>

        <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
     </ul>

        
        
    </nav>
  )
}

export default Navbar
