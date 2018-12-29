import React from 'react';
import '../../css/plantDescriptions.css';
import Pea from './plantImages/Pea.jpg'

const PeaDescription = () => {

    return(

            <div>
                <h4 className='title'>Pea</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Pea} alt='Pea'></img>

                    <ul>
                        <li>Attacked by cutworm, Mexican bean beetle and aphids</li>
                        <li>Mint improve their flavor</li>
                        <li>Repels colorado potato beetle</li>
                        <li>Stunts the growth of turnips, cauliflower, garlic, leeks, onions and garlic </li>
                        <li>Dont plant in the same location each year </li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default PeaDescription
