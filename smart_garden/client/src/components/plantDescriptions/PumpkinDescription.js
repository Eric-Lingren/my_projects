import React from 'react';
import '../../css/plantDescriptions.css';
import Pumpkin from './plantImages/Pumpkin.jpg'

const PumpkinDescription = () => {

    return(

        <div>
            <h4 className='title'>Pumpkin</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Pumpkin} alt='Pumpkin'></img>

                <ul>
                    <li>Attracts spiders and ground beetles</li>
                    <li>Susceptible to squash bugs, cucumber beetles, aphids and squash vine borer </li>
                    <li>Very heavy feeders </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default PumpkinDescription