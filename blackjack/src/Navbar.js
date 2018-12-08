import React from 'react'
import {Link} from 'react-router-dom'
import './css/navbar.css'

const Navbar = () => {

    return (
        <div className='navContainer'>
            <Link className='navLinks' to="/">Home</Link>
            <Link className='navLinks' to="/Learn">Learn</Link>
            <Link className='navLinks' to="/Train">Train</Link>
            <Link className='navLinks' to="/Play">Play</Link>

        </div>
    )
}

export default Navbar