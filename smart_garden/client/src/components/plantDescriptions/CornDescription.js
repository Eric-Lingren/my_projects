import React from 'react';
import '../../css/plantDescriptions.css';
import Corn from './plantImages/Corn.jpg'

const CornDescription = () => {

    return(

        <div>
            <h4 className='title'>Corn</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Corn} alt='Corn'></img>

                <ul>
                    <li>Attacked by cutworm, Japanese beetles, chinch bugs, spotted cucumber beetles and flea beetles</li>
                    <li>Good trellis for other climbing plants</li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default CornDescription
