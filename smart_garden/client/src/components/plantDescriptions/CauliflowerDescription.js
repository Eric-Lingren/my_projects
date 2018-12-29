import React from 'react';
import '../../css/plantDescriptions.css';
import Cauliflower from './plantImages/Cauliflower.jpg'

const CauliflowerDescription = () => {

    return(

            <div>
                <h4 className='title'>Cauliflower</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Cauliflower} alt='Cauliflower'></img>

                    <ul>
                        <li>Attracts and eaten by cabbage worm/maggots, aphids and harlequin bugs</li>
                        <li>Peas stunt the growth of cauliflower; Tomatoes are heavy feeders and will take from cauliflower.</li>
                    </ul>
                </div>
            </div>
    )  
}

export default CauliflowerDescription
