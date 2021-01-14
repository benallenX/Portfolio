import React from 'react'
import content from '../Content/'
import {Link} from 'react-router-dom'
const Projects = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <h1 className='text-xl font-bold'>Projects</h1>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Link to='https://covid-tracker-2bc0a.web.app/'>
                <img src="https://www.mddionline.com/sites/mddionline.com/files/field/image/covid-19-4908691_1920.jpg" alt="" className="w-full"/>
                </Link>
                
            </div>
            <div className="font-bold text-red-text-lg mb-2">
                    <h1>Covid Tracker</h1>
                </div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
        </div>
    )
}

export default Projects
