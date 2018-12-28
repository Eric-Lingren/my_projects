import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const PepperModal = (props) => {

    const show = props.showPepperRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.pepperRecommend}>&times;</span>
                    <h1 className='modalTitle'> Peppers </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>
                                okra tomato onions basil cilantro spinich
                            </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>
                            beans kale brussle sprouts
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(PepperModal)