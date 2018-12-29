import React from 'react';
import '../../css/plantDescriptions.css';
import Bean from './plantImages/Bean.jpg'

const BeanDescription = () => {

    return(

        <div>
            <h4 className='title'>Bean</h4>
            <div className='plantDescriptionWrapper'>

                <img src={Bean} alt='Bean'></img>

                <ul>
                    <li>Attracts snails, cutworm, flea beetles and slugs</li>
                    <li>Repels Colorado potato beetle</li>
                    <li>Heavy nitrogen fixer</li>
                    <li>Growth stunted by onions, beets, chives, shallots and garlic</li>
                    
                </ul>
            </div>
        </div>
    )  
}

export default BeanDescription