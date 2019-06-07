import React from 'react';
import './navbar-styles.css';
import { NavLink } from 'react-router-dom'
import companyLogo from './logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <div className='logos-wrapper'>
                <div className='company-logo-horizontal' style={{backgroundImage: `url(${companyLogo})`}}> </div>
                <div className='company-motto'> </div>
            </div>
            <div className='links-wrapper'>
                    <NavLink className='link' exact to='/'> Podcasts </NavLink>
                    <NavLink className='link' to='/startProject'> Start a Project </NavLink>
                    <NavLink className='link' to='/companyProjects'> Company Projects </NavLink>
                    <NavLink className='link' to='/resources'> Resources </NavLink>
                    <NavLink className='link' to='/tools'> Tools </NavLink>
                    <NavLink className='link' to='/help'> Need Help? </NavLink>
                
            </div>
        </div>
    );
}

export default Navbar;
