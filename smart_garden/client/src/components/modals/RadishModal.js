import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const RadishModal = (props) => {

    const show = props.showRadishRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.radishRecommend}>&times;</span>
                    <h1 className='modalTitle'> Radish </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>
                            squash eggplant cucumber lettuce peas beans basil cilantro onion spinich tomato
                            </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>
                            grapes
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(RadishModal)