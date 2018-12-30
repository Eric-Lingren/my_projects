import React from 'react';
import '../../css/plantDescriptions.css';
import Kale from './plantImages/Kale.jpg'

const KaleDescription = () => {

    return(

        <div>
            <h4 className='title'>Kale</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Kale} alt='Kale'></img>

                <ul>
                    <li>Susceptible to cabbage moth, cabbageworm, cabbage looper, flea beetles and aphids  </li>
                    <li>Doesn't provide garden benefits  </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default KaleDescription