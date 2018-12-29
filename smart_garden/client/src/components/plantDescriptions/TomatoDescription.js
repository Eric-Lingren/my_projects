import React from 'react';
import '../../css/plantDescriptions.css';
import Tomato from './plantImages/Tomato.jpg'

const TomatoDescription = () => {

    return(

            <div>
                <h4 className='title'>Tomato</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Tomato} alt='Tomato'></img>

                    <ul>
                        <li>Repeals asparagus beetle</li>
                        <li>Attracts earworms which devastates corn</li>
                        <li>Protects roses from blackspot</li>
                    </ul>
                </div>
            </div>
    )  
}

export default TomatoDescription
