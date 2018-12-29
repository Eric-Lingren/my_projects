import React from 'react';
import '../../css/plantDescriptions.css';
import Spinich from './plantImages/Spinich.jpg'

const SpinichDescription = () => {

    return(

            <div>
                <h4 className='title'>Spinich</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Spinich} alt='Spinich'></img>

                    <ul>
                        <li>Does well in the shade of other plants</li>
                        <li>Good cover crop to shade out weeds and retain moisture</li>
                        <li>Doesnt provide much help or harm </li>
                    </ul>
                </div>
            </div>
    )  
}

export default SpinichDescription