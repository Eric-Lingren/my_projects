import React from 'react';
import '../../css/plantDescriptions.css';
import Radish from './plantImages/Radish.jpeg'

const RadishDescription = () => {

    return(

            <div>
                <h4 className='title'>Radish</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Radish} alt='Radish'></img>

                    <ul>
                        <li>Repels flea beetles and cucumber beetles</li>
                        <li>Improves the tase of lettuce</li>
                        <li>Eaten by cabbage moth</li>
                        <li>Chervil makes radishes hot, nasturtiums improve their flavor</li>
                        <li>Loved by flea beetles so they are a great trap</li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default RadishDescription
