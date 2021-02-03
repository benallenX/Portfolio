import React from 'react'
import './Header.css'




const Header = () => {
    return (
        <header>
           <nav>
                <ul>
                    <li className="current">
                        Home
                    </li>
                    <li>About</li>
                    <li>Resume</li>
                    <li>My Work</li>
                    <li>Contact</li>
                </ul>
           </nav> 
        </header>
    )
}

export default Header
