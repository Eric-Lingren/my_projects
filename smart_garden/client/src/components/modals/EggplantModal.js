import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const EggplantModal = (props) => {

    const show = props.showEggplantRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.eggplantRecommend}>&times;</span>
                    <h1 className='modalTitle'> Eggplant </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p> bean pepper tomato</p>
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

export default withCompanion(EggplantModal)