import React from 'react';
import '../../css/plantDescriptions.css';
import Melon from './plantImages/Melon.jpg'

const MelonDescription = () => {

    return(

        <div>
            <h4 className='title'>Melon</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Melon} alt='Melon'></img>

                <ul>
                    <li>Heavy nitrogen feeders, and leaves have lots of calcium so compost them.</li>
                    <li>Susceptible to aphids, cucumber beetles, squash vine borer moths, whiteflies, leafhoppers and ants </li>
                    <li>Catnip, tansy, marigolds and nasturtiums will prevent pests </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default MelonDescription