import React from 'react';
import '../../css/plantDescriptions.css';
import Squash from './plantImages/Squash.jpg'

const SquashDescription = () => {

    return(

            <div>
                <h4 className='title'>Squash</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Squash} alt='Squash'></img>

                    <ul>
                        <li>Attracts spiders and ground beetles</li>
                        <li>Most succeptible to squash vine borer, squash bug, cucumber beetle, stink bug and aphids. </li>
                        <li>Marigolds, oregano, radishes and nasturtiums are most helpful in preventing bugs that eat squash</li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default SquashDescription
