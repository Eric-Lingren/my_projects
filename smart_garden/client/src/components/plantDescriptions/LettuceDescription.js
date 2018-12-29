import React from 'react';
import '../../css/plantDescriptions.css';
import lettuce from './plantImages/lettuce.jpg'

const LettuceDescription = () => {

    return(

            <div>
                <h4 className='title'>Lettuce</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={lettuce} alt='lettuce'></img>

                    <ul>
                        <li>Good cover crop to retain moisture and supress weeds</li>
                        <li>Can attract excess slugs and snails</li>
            </ul>
                </div>
            </div>
    )  
}

export default LettuceDescription
