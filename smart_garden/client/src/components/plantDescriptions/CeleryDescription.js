import React from 'react';
import '../../css/plantDescriptions.css';
import Celery from './plantImages/Celery.jpg'

const CeleryDescription = () => {

    return(

            <div>
                <h4 className='title'>Celery</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Celery} alt='Celery'></img>

                    <ul>
                        <li>Vulnerable to cutworm, flea beetles, slugs, snails and earwigs</li>
                        <li>Repeals the cabbage white butterfly</li>
                        
                    </ul>
            </div>
            </div>
    )  
}

export default CeleryDescription
