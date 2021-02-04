import React,{useState, useEffect} from 'react'
import Sidebar from '../Sidebar/index'
import Navbar from '../Navbar/index'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {

    })
    
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar  toggle={toggle}/>
        </div>
    )
}

export default Home
