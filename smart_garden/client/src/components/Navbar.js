import React from 'react';
import '../css/navbar.css';

const Navbar = () => {

    return(
        <div className='navbar'>
            <div className='navLinkContainer'>
                <span>My Gardens: </span>
                <select>
                    <option value="Garden 2">Garden 1</option>
                    <option value="Garden 1">Garden 2</option>
                    <option value="Test Garden">Test Garden</option>
                </select>
                <span>Year: </span>
                <select>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                </select>
                <a class='navLink' href='none'>Journal</a>
                <a class='navLink' href='none'>Adruino</a>
            </div>
            <form className='loginForm'>
                User Name: <input type='text' placeholder='User Name'/> 
                Password: <input type='text' placeholder='Password'/> 
                <button>Sign In</button>
                <button>Register</button>
            </form>
        </div>
    )
    
}

export default Navbar