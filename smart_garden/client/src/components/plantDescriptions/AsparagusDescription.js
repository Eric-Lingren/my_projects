import React from 'react';
import '../../css/plantDescriptions.css';
import Asparagus from './plantImages/Asparagus.jpg'

const AsparagusDescription = () => {

    return(

        <div>
            <h4 className='title'>Asparagus</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Asparagus} alt='Asparagus'></img>

                <ul>
                    <li>Attracts ladybugs, repels nematodes</li>
                    <li>Competes with onions, garlic, shallots and potatoes for the same nutirents</li>
                    <li>Susceptible to cutworms, asparagus beetles and slugs </li>
                    <li>Deer will avoid it </li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default AsparagusDescription