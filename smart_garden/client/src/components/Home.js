import React from 'react';
import Navbar from './Navbar';
import PlantList from './PlantList';
import AddPlantForm from './AddPlantForm';
import Garden from './Garden';
import Plant from './Plant';
import '../css/homeStyle.css'

const Home = () => {

    return(
        <div>
            <Navbar />
            <div className='myForms'>
            <Garden />
            <AddPlantForm />
            </div>
            
            
            <PlantList />
            <Plant />
        </div>
    )
    
}

export default Home