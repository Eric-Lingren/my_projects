import React from 'react';
import '../../css/plantDescriptions.css';
import Potato from './plantImages/Potato.jpg'

const PotatoDescription = () => {

    return(

            <div>
                <h4 className='title'>Potato</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Potato} alt='Potato'></img>

                    <ul>
                        <li>Doesnt grow well with beans</li>
                        <li>Repels Mexican bean beetle</li>
                        <li>Can spread blight to tomatoes, peppers and eggplants</li>
                        <li>Raspberries, sunflowers, pumpkins, squash and cucumbers will increase the likleihood of potato blight</li>
                        <li>Growth will be stunted by asparagus, carrots, fennel, turnips and onions </li>
                    </ul>
                </div>
            </div>
    )  
}

export default PotatoDescription
