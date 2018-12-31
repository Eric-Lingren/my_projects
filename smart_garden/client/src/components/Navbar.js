import React, {Component} from 'react';
import '../css/navbar.css';
import GardenList from './GardenList';
import {withGardens} from '../context/GardenProvider'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedGarden: '',
            selectedYear: ''
        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    // {/* <a className='navLink' href='none'>Journal</a>
    //                 <a className='navLink' href='none'>Adruino</a> */}
// {/* <form className='loginForm'>
//                     <span className='navbarText'> 
//                         User Name: 
//                     </span> 

//                     <input className='newPlantInput' type='text' placeholder='User Name'/> 

//                     <span className='navbarText'> 
//                         Password: 
//                     </span> 

//                     <input className='newPlantInput' type='text' placeholder='Password'/> 

//                     <button className='registrationButtons' >Sign In</button>
//                     <button className='registrationButtons'>Register</button>
//                 </form> */}
    render() {
        return(
            <div className='navbar'>
                <div className='navLinkContainer'>
                    <span className='navbarText'>My Gardens: </span>
                    <GardenList />
                    
                </div>

                <div className='helpLink'>
                    <Link className='navbarTextLink' to="/"> Home </Link>
                    <Link className='navbarTextLink' to="/help"> Help </Link>
                    <Link className='navbarTextLink' to="/arduino"> Arduino </Link>
                </div>

                <div className='logoWrapper'>
                    <h1 className='pageTitle'> SmartGarden </h1> 
                    <h3 className='trademark'>™ </h3>
                    <div className='gifContianer'></div>
                </div>
                
                
                
            </div>
        )
    }
}

export default withGardens(Navbar)