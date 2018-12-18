import React from 'react';
import '../css/navbar.css';
import GardenList from './GardenList'

const Navbar = () => {

    return(
        <div className='navbar'>
            <div className='navLinkContainer'>
                <span className='navbarText'>My Gardens: </span>
                <GardenList />

                <span className='navbarText'>Year: </span>
                <input  type='number'
                        placeholder='2018'
                        className='newPlantInput'>
                </input>
                <a className='navLink' href='none'>Journal</a>
                <a className='navLink' href='none'>Adruino</a>
            </div>
            
            <form className='loginForm'>
                <span className='navbarText'> User Name: </span> 
                    <input className='newPlantInput' type='text' placeholder='User Name'/> 
                <span className='navbarText'> Password: </span> 
                    <input className='newPlantInput' type='text' placeholder='Password'/> 
                <button className='registrationButtons' >Sign In</button>
                <button className='registrationButtons'>Register</button>
            </form>
            
        </div>
    )
    
}

export default Navbar