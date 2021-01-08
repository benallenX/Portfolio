import React from 'react'
import './scss/Header.css'
import '../Navbar/Navbar'
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <div className='header__home'>
            <div className="container">
                <Navbar />
                <div className="header__container">
                    <h1> Ben Allen JR
                    <span 
                    className="txt-type" 
                    data-wait='3000' 
                    data-words={'React Developer'}>
                    </span>
                    </h1>
                    <button>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Header
