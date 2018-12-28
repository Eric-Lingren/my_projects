import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const BeanModal = (props) => {

    const show = props.showBeanRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.beanRecommend}>&times;</span>
                    <h1 className='modalTitle'> Beans </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>beets broccoli cabbage carrots cauliflower celery corn cucumber eggplant peas potato raddish squash strawberry tomato</p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>garlic onion pepper sunflower</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(BeanModal)

