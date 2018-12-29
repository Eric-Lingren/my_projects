import React from 'react';
import '../../css/plantDescriptions.css';
import Carrot from './plantImages/Carrot.jpg'

const CarrotDescription = () => {

    return(

            <div>
                <h4 className='title'>Carrot</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Carrot} alt='Carrot'></img>

                    <ul>
                        <li>Attracts assassin bug, praying mantises, ladybugs, spiders, lacewing, parasitic wasp and predatory wasps</li>
                        <li>Repeals Leek moth and onion fly</li>
                        <li>Susceptible to carrot fly, wireworms, flea beetles and cutworm</li>
                    </ul>
                </div>
            </div>
    )  
}

export default CarrotDescription
