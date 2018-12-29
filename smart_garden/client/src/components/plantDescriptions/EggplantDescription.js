import React from 'react';
import '../../css/plantDescriptions.css';
import Eggplant from './plantImages/Eggplant.jpg'

const EggplantDescription = () => {

    return(

            <div>
                <h4 className='title'>Eggplant</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Eggplant} alt='Eggplant'></img>

                    <ul>
                        <li>Attacked by colorado potato beetles which are prevented by beans</li>
                        <li>Heavy nitrogen consumers and need full sun</li>
                        <li>Hot peppers help prevent fusarium root rot</li>
                        <li>Most herbs help, but thyme and catnip are the best for eggplant</li>
                        
                    </ul>
                </div>
            </div>
)  
}

export default EggplantDescription
