import React from 'react';
import '../../css/plantDescriptions.css';
import Pepper from './plantImages/Pepper.jpg'

const PepperDescription = () => {

    return(

            <div>
                <h4 className='title'>Pepper</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Pepper} alt='Pepper'></img>

                    <ul>
                        <li>Attacked by cutworm, aphids, flea beetles and cucumber moasic virus</li>
                        <li>Too much nitrogen can prevent fruiting </li>
                        <li>If a pepper fungus is contracted it can kill apricot trees</li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default PepperDescription
