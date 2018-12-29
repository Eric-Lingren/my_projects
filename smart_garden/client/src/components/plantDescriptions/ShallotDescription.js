import React from 'react';
import '../../css/plantDescriptions.css';
import Shallot from './plantImages/Shallot.jpeg'

const ShallotDescription = () => {

    return(

        <div>
            <h4 className='title'>Shallot</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Shallot} alt='Shallot'></img>

                <ul>
                    <li>Repeals repel cabbage loopers, cabbage maggots, cabbage worms, fungus gnats, red spider mites, 
                        Japanese beetles, snails, aphids, carrot flies, deer and rabbits</li>
                    <li>Will stunt growth of sage, parsley, asparagus, beans and peas</li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default ShallotDescription
