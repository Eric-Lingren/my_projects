import React from 'react';
import '../../css/plantDescriptions.css';
import Okra from './plantImages/Okra.jpg'

const OkraDescription = () => {

    return(

        <div>
            <h4 className='title'>Okra</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Okra} alt='Okra'></img>

                <ul>
                    <li>Good shade provider for other plants</li>
                    <li>Susceptible to aphids, corn earworms and stinkbugs </li>
                    <li>Best with sweet potato </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default OkraDescription