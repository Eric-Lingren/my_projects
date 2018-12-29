import React from 'react';
import '../../css/plantDescriptions.css';
import Cabbage from './plantImages/Cabbage.jpg'

const CabbageDescription = () => {

    return(

            <div>
                <h4 className='title'>Cabbage</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Cabbage} alt='Cabbage'></img>

                    <ul>
                        <li> Attracts slugs, snails, cabbage moths, cabbage worms and cabbage looper </li>
                        <li> Doesn't provide any garden benefits </li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default CabbageDescription
