import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const OnionModal = (props) => {

    const show = props.showOnionRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.onionRecommend}>&times;</span>
                    <h1 className='modalTitle'> Onion </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>
                            beats cabbage broccoli cabbage carrots lettuce cucumbers peppers strawberies potato spinich
                            </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>peas beans sage</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(OnionModal)