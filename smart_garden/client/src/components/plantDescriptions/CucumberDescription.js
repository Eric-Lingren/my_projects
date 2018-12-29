import React from 'react';
import '../../css/plantDescriptions.css';
import Cucumber from './plantImages/Cucumber.jpg'

const CucumberDescription = () => {

    return(

            <div>
                <h4 className='title'>Cucumber</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={Cucumber} alt='Cucumber'></img>

                    <ul>
                        <li>Attracts ground beetles and cucumber beetles which are prevented by radishes, marigolds and amaranth</li>
                        <li>Repeals raccoons and ants</li>
                        <li>Sage will stunt cucumber growth</li>
                        <li>Can promote potato blight</li>
                        
                    </ul>
                </div>
            </div>
    )  
}

export default CucumberDescription
