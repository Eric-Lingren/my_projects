import React from 'react';
import '../../css/plantDescriptions.css';
import Parsley from './plantImages/Parsley.jpg'

const ParsleyDescription = () => {

    return(

            <div>
                <h4 className='title'>Parsley</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Parsley} alt='Parsley'></img>

                    <ul>
                        <li>Makes roses smell sweeter</li>
                        <li>Attracts praying mantises, Swallowtail butterflies, hoverflies, ladybugs and spiders</li>
                        <li>Repels some harmful beetles</li>
                    </ul>
                </div>
            </div>
    )  
}

export default ParsleyDescription
