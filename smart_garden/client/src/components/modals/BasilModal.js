import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import AsparagusDescription from '../plantDescriptions/AsparagusDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import OreganoDescription from '../plantDescriptions/OreganoDescription';
import PepperDescription from '../plantDescriptions/PepperDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

const BasilModal = (props) => {

    const show = props.showBasilRecommend


    return(
        
            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.basilRecommend}>&times;</span>
                    <h1 className='modalTitle'> Basil </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                     
                            <AsparagusDescription />
                            <LettuceDescription/>
                            <OreganoDescription />
                            <PepperDescription />
                            <TomatoDescription />
                       
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <p> No detrimental plants. Able to grow anything next to basil. </p>

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(BasilModal)

