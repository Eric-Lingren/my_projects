import React from 'react';
import '../../css/plantDescriptions.css';
import Broccoli from './plantImages/Broccoli.jpg'

const BroccoliDescription = () => {

    return(

            <div>
                <h4 className='title'>Broccoli</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Broccoli} alt='Broccoli'></img>

                    <ul>
                        <li>Repeals Wireworms</li>
                        <li>Attarcts and harmed by harlequin bugs, cabbage worms, cabbage loppers, and cabbage maggots</li>
                        <li>Consumes a lot of calicum and competes with family members</li>
                        <li>Celery, potatoes, onions and chamomile improve broccoli’s flavor. </li>
                    </ul>
                </div>
            </div>
    )  
}

export default BroccoliDescription
