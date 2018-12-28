import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BasilDescription from '../plantDescriptions/BasilDescription';

const AsparagusModal = (props) => {

    const show = props.showAsparagusRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.asparagusRecommend}>&times;</span>
                    <h1 className='modalTitle'> Asparagus </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <BasilDescription />
                            <p> Basil
                                Beets
                                Cilantro
                                Comfrey
                                Dill
                                Lettuce
                                Marigolds
                                Parsley
                                Spinich
                                Tomatoes
                            </p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>garlic onion potato</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(AsparagusModal)
