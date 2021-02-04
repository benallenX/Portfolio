import React from 'react'
import{Nav,NavbarContainer,NavLogo,MobileIcon,NavItems,NavMenu,NavLinks} from './NavElements.js'
import {FaBars} from 'react-icons/fa'



const Navbar = ({toggle}) => {
    return (
        <>
           <Nav>
               <NavbarContainer>
                   <NavLogo to='/'>BA</NavLogo>
                   <MobileIcon onClick={toggle}>
                    <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItems>
                            <NavLinks to ='home'>Home</NavLinks>
                       </NavItems>
                       <NavItems>
                            <NavLinks to ='about'>About</NavLinks>
                       </NavItems>
                       <NavItems>
                            <NavLinks to ='skills'>Skills</NavLinks>
                       </NavItems>
                       <NavItems>
                            <NavLinks to ='work'>Work</NavLinks>
                       </NavItems>
                       <NavItems>
                            <NavLinks to ='contact'>Contact</NavLinks>
                       </NavItems>
                   </NavMenu>
               </NavbarContainer>
           </Nav>
        </>
    )
}

export default Navbar
