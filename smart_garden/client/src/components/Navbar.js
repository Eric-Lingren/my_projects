import React, {Component} from 'react';
import '../css/navbar.css';
import GardenList from './GardenList';
import {withGardens} from '../context/GardenProvider'

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

   
    render() {

    return(
        <div className='navbar'>
            <div className='navLinkContainer'>
                <span className='navbarText'>My Gardens: </span>
                <GardenList />
{/* 
                <span className='navbarText'>Year: </span>
                <input  name = 'selectedYear'
                        type ='number'
                        value = {this.state.selectedYear}
                        placeholder ='2018'
                        className ='newPlantInput'
                        onChange = {this.handleChange}>
                </input> */}
                
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
}

export default withGardens(Navbar)