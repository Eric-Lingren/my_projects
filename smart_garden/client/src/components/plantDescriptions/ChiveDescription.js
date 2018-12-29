import React from 'react';
import '../../css/plantDescriptions.css';
import Chive from './plantImages/Chive.jpg'

const ChiveDescription = () => {

    return(

        <div>
            <h4 className='title'>Chive</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Chive} alt='Chive'></img>

                <ul>
                    <li>Repels cabbage worms, carrot fly, aphids, mites, Japanese beetles and nematodes</li>
                    <li>Improves the flavor of carrots and tomatoes</li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default ChiveDescription