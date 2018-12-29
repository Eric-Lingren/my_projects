import React from 'react';
import '../../css/plantDescriptions.css';
import Brusselsprout from './plantImages/Brusselsprout.jpg'

const BrusselsproutDescription = () => {

    return(

        <div>
            <h4 className='title'>Brusslesprout</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Brusselsprout} alt='Brusselsprout'></img>

                <ul>
                    <li>Avoid planting near eggplants, peppers, potatoes, or tomatoes</li>
                    <li>Susceptible to cabbage worm / moth / rootmaggots / loopers, thrips, squash bugs, flea beetles and aphids </li>
                    <li>Mints, garlic and marigolds will keep most pests away </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default BrusselsproutDescription