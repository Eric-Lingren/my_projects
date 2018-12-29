import React from 'react';
import '../../css/plantDescriptions.css';
import Sage from './plantImages/Sage.jpg'

const SageDescription = () => {

    return(

        <div>
            <h4 className='title'>Sage</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Sage} alt='Sage'></img>

                <ul>
                    <li>Attracts honeybees and cabbage butterfly</li>
                    <li>Repels Cabbage flies/moths, carrot fly, black flea beetle, cabbage looper, cabbage maggot and many bean parasites</li>
                    <li>Speeds growth of tomatoes, but slows cucumbers</li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default SageDescription