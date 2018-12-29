import React from 'react';
import '../../css/plantDescriptions.css';
import Sunflower from './plantImages/Sunflower.jpg'

const SunflowerDescription = () => {

    return(

            <div>
                <h4 className='title'>Sunflower</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Sunflower} alt='Sunflower'></img>

                    <ul>
                        <li>Draws aphids away from other plants to its-self, well as ants who will herd other pests onto the flowers</li>
                        <li>Will attract bees, ladybugs, deer, birds and squirrels</li>
                        <li>Mostly pest free but can attract gray moths</li>
                        <li>Improves the yield of corn</li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default SunflowerDescription
