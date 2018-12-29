import React from 'react';
import '../../css/plantDescriptions.css';
import Garlic from './plantImages/Garlic.jpeg'

const GarlicDescription = () => {

    return(

            <div>
                <h4 className='title'>Garlic</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Garlic} alt='Garlic'></img>

                    <ul>
                        <li>Repeals cabbage loopers, cabbage maggots, cabbage worms, fungus gnats, red spider mites, 
                            Japanese beetles, snails, aphids, deer and rabbits</li>
                        <li>Will stunt growth of sage, parsley, asparagus, beans and peas</li>
                        <li>Accumulates sulfur which is a naturally-occurring fungicide, especially effective against potato blight</li>
                    </ul>
                </div>
            </div>
    )  
}

export default GarlicDescription
