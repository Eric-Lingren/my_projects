import React from 'react';
import '../../css/plantDescriptions.css';
import Rosemary from './plantImages/Rosemary.jpg'

const RosemaryDescription = () => {

    return(

        <div>
            <h4 className='title'>Rosemary</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Rosemary} alt='Rosemary'></img>

                <ul>
                    <li>Repels Mexican bean beetle, cabbage flies, cabbage moth and carrot flies</li>
                    <li>Susceptible to aerial blight, bacterial leaf spots and root rot </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default RosemaryDescription