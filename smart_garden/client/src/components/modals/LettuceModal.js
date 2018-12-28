import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const LettuceModal = (props) => {

    const show = props.showLettuceRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.lettuceRecommend}>&times;</span>
                    <h1 className='modalTitle'> Lettuce </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>
                            asparagus beats brussle sprouts beans okra onions radish carrots eggplant peas spinich
                            </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>celery broccoli</p>    
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(LettuceModal)