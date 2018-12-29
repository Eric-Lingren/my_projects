import React from 'react';
import '../../css/plantDescriptions.css';
import Mint from './plantImages/Mint.jpg'

const MintDescription = () => {

    return(

        <div>
            <h4 className='title'>Mint</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Mint} alt='Mint'></img>

                <ul>
                    <li>Repels cabbage moth, aphids, flea beetles, ants, earwigs, mealybugs, slugs, snails, spider mites, roaches, mice and deer</li>
                    <li> Attracts earthworms, hoverflies and predatory wasps </li>
                    <li> Will improve the health and flavor of peas, cabbage & tomatoes  </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default MintDescription