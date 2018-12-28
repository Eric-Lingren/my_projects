import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const CabbageModal = (props) => {

    const show = props.showCabbageRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.cabbageRecommend}>&times;</span>
                    <h1 className='modalTitle'> Cabbage </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>
                                beans celery cucumber dill kale lettuce onion potato sage spinich thyme
                            </p> 
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>
                                broccoli cauliflower strawberry tomato
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(CabbageModal)