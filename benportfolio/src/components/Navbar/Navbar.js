import React from 'react'
import './scss/Navbar.css'


const Navbar = () => {
    return (
        <div className='navbar'>
         {/* <img src="" alt="logo"/> */}
            <ul>
            <li className='home'>Home</li>
            <li>About Me</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Tools</li>
            </ul>
            
        </div>
    )
}

export default Navbar
