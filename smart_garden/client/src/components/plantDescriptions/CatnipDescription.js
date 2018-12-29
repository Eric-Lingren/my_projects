import React from 'react';
import '../../css/plantDescriptions.css';
import Catnip from './plantImages/Catnip.jpg'

const CatnipDescription = () => {

    return(

            <div>
                <h4 className='title'>Catnip</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Catnip} alt='Catnip'></img>

                    <ul>
                        <li>Attracts bees and cats</li>
                        <li>Repeals ants, aphids, beetles, cockroaches, flea beetle, Japanese beetles, squash bugs, weevils, mice and rats.</li>
                    </ul>
                </div>
            </div>
    )  
}

export default CatnipDescription
