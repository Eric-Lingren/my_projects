import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const SpinichModal = (props) => {

    const show = props.showSpinichRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.spinichRecommend}>&times;</span>
                    <h1 className='modalTitle'> Spinich </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>
                            cabbage cauliflower broccoli turnip strawberries peas beans
                            </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p> no negative plants</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(SpinichModal)