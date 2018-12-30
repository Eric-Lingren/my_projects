import React from 'react';
import '../../css/plantDescriptions.css';
import Oregano from './plantImages/Oregano.jpg'

const OreganoDescription = () => {

    return(

        <div>
            <h4 className='title'>Oregano</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Oregano} alt='Oregano'></img>

                <ul>
                    <li> Attracts hoverflies which eat aphids</li>
                    <li> Can be planted near anything </li>
                    <li> Good groundcover near plants that like humidity </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default OreganoDescription