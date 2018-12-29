import React from 'react';
import '../../css/plantDescriptions.css';
import Onion from './plantImages/Onion.jpg'

const OnionDescription = () => {

    return(

            <div>
                <h4 className='title'>Onion</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Onion} alt='Onion'></img>

                    <ul>
                        <li>Repeals repel cabbage loopers, cabbage maggots, cabbage worms, fungus gnats, red spider mites, 
                            Japanese beetles, snails, aphids, carrot flies, deer and rabbits</li>
                        <li>Will stunt growth of sage, parsley, asparagus, beans and peas</li>
                        <li>Helps berries resist diesese</li>
                    </ul>
                </div>
            </div>
    )  
}

export default OnionDescription
