import React from 'react';
import '../../css/plantDescriptions.css';
import cilantro from './plantImages/cilantro.jpg'

const CilantroDescription = () => {

    return(

            <div>
                <h4 className='title'>Cilantro</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={cilantro} alt='cilantro'></img>

                    <ul>
                        <li>Cross-polinates with dill, ruining both crops.</li>
                        <li>Attracts Parasitic Wasps and Hover Flies</li>
                    </ul>
                </div>
            </div>
    )  
}

export default CilantroDescription
