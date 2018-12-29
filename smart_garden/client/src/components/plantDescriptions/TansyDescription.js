import React from 'react';
import '../../css/plantDescriptions.css';
import Tansy from './plantImages/Tansy.jpg'

const TansyDescription = () => {

    return(

            <div>
                <h4 className='title'>Tansy</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Tansy} alt='Tansy'></img>

                    <ul>
                        <li>Repeals cutworms, Ichmeumoid wasps, Japanese beetles, 
                            striped cucumber beetles, squash bugs, sugar ants, mice, fleas and moths </li>
                        <li>Attracts ladybugs and bees</li>
                        <li>Deposits potassium into the soil</li>
                        <li>Toxic to people and animals</li>
                    </ul>
                </div>
            </div>
    )  
}

export default TansyDescription
