import React from 'react';
import '../../css/plantDescriptions.css';
import basil from './plantImages/basil.jpg'

const BasilDescription = () => {

    return(

            <div>
                <h4 className='title'>Basil</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={basil} alt='basil'></img>

                    <ul>
                        <li>Repeals tomato hornworms, aphids, asparagus beetles, mosquitoes, and white flies</li>
                        <li>Attracts ladybugs and butterflies</li>
                        <li>Increases tomato yields</li>
                    </ul>
                </div>
            </div>
    )  
}

export default BasilDescription
