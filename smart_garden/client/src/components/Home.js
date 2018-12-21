import React, { Component } from 'react';
import Navbar from './Navbar';
import PlantList from './PlantList';
import AddPlantForm from './AddPlantForm';
import Garden from './Garden';
import '../css/homeStyle.css'
import { withPlants } from '../context/PlantProvider'

class Home extends Component {
    componentDidMount(){
        this.props.getPlants()
    }

    render(){
        return(
            <div>
                <Navbar />
                <div className='pageWrapper'>
                    <div className='leftColumn'>
                        <AddPlantForm />
                        <PlantList currentPlants={this.props.currentPlants}/>
                    </div>
                    <div className='mainColumn'>
                        <Garden />
                    </div>
                </div>
            </div>
        )
    }    
}

export default withPlants(Home)