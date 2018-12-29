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
                        <li>Repeals aphids away from other plants as well as ants who will herd other pests onto the flowers</li>
                        <li>Will attract bees, ladybugs, deer, birds and squirrels</li>
                        <li>Relatively insect-free but can attract gray moths</li>
                        <li>Improves the yield of corn</li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default SunflowerDescription
