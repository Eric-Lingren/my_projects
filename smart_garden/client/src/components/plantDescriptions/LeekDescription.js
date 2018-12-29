import React from 'react';
import '../../css/plantDescriptions.css';
import Leek from './plantImages/Leek.jpg'

const LeekDescription = () => {

    return(

            <div>
                <h4 className='title'>Leek</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Leek} alt='Leek'></img>

                    <ul>
                        <li>Repels carrot rust flies; eaten by onion flies</li>
                        <li>Carrots and leeks are the best combo.  Also good with cabbage, tomatoes, beets and lettuce</li>
                        <li>Harms beans and peas</li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default LeekDescription
