import React from 'react';
import '../../css/plantDescriptions.css';
import Strawberry from './plantImages/Strawberry.jpeg'

const StrawberryDescription = () => {

    return(

            <div>
                <h4 className='title'>Strawberry</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Strawberry} alt='Strawberry'></img>

                    <ul>
                        <li>Attracts many slugs and snails</li>
                        <li>Thyme will improve yeilds and deter worms</li>
                        <li>Beans are most beneficial, cabbage is most detrimental </li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default StrawberryDescription
