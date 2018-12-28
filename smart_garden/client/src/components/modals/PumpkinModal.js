import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const PumpkinModal = (props) => {

    const show = props.showPumpkinRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.pumpkinRecommend}>&times;</span>
                    <h1 className='modalTitle'> Pumpkin </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>
                            corn beans radish oregano
                            </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>
                            potato
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(PumpkinModal)