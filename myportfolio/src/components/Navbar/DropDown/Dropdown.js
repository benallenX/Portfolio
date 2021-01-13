import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={
            isOpen ? 'grid grid-rows-4 text-center items-center  bg-blue-400'
            : 'hidden'
        }
         onClick={toggle}
        >
            <Link to='/' className='p-4'>Home</Link>
            <Link to='/Info' className='p-4'>Info</Link>
            <Link to='/Projects' className='p-4'>Projects</Link>
            <Link to='/Skills' className='p-4'>Skills</Link>
            <Link to='/Tools' className='p-4'>Tools</Link>
        </div>
    )
}

export default Dropdown
