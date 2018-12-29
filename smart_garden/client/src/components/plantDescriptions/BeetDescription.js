import React from 'react';
import '../../css/plantDescriptions.css';
import beet from './plantImages/beet.jpg'

const BeetDescription = () => {

    return(

            <div>
                <h4 className='title'>Beet</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={beet} alt='beet'></img>

                    <ul>
                        <li>Leaves contain 25% magnesium - great for compost</li>
                        <li>Pole beans and beets will stunt each others growth.  Bush beans are ok</li>
                    </ul>
                </div>
            </div>
    )  
}

export default BeetDescription
