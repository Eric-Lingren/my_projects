import React from 'react';
import '../../css/plantDescriptions.css';
import Grape from './plantImages/Grape.jpg'

const GrapeDescription = () => {

    return(

        <div>
            <h4 className='title'>Grape</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Grape} alt='Grape'></img>

                <ul>
                    <li>Great near flowers and herbs.  Avoid cabbage family, lettuce and radishes. </li>
                    <li>Susceptible to leafhoppers, worms and Japanese beetles  </li>
                    <li>Needs lots of nitrogen</li>
                    
                </ul>
        </div>
        </div>
    )  
}

export default GrapeDescription