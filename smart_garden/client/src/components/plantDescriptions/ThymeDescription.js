import React from 'react';
import '../../css/plantDescriptions.css';
import Thyme from './plantImages/Thyme.jpg'

const ThymeDescription = () => {

    return(

        <div>
            <h4 className='title'>Thyme</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Thyme} alt='Thyme'></img>

                <ul>
                    <li>Attracts hoverflies which eat aphids</li>
                    <li>Repels cabbage worm, cabbage weevil, cabbage looper and whitefly</li>
                    <li>Good for all crops</li>
                    <li>Only succeptible to gray mold and root rot</li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default ThymeDescription