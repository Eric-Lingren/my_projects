import React from 'react';
import Navbar from './Navbar';
import PlantList from './PlantList';
import AddPlantForm from './AddPlantForm';
import Garden from './Garden';
import Plant from './Plant';

const Home = () => {

    return(
        <div>
            <Navbar />
            <AddPlantForm />
            <PlantList />
            <Garden />
            <Plant />
        </div>
    )
    
}

export default Home