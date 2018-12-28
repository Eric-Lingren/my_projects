import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const CucumberModal = (props) => {

    const show = props.showCucumberRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.cucumberRecommend}>&times;</span>
                    <h1 className='modalTitle'> Cucumber </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                           <p>
                           beans lettuce peas raddish corn cauliflower sunflower
                           </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>
                            potato herbs melons
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(CucumberModal)