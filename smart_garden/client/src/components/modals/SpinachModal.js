import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import CabbageDescription from '../plantDescriptions/CabbageDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import StrawberryDescription from '../plantDescriptions/StrawberryDescription';

const SpinachModal = (props) => {

    const show = props.showSpinachRecommend

    return(

        <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
            <div class="modal-content">
                <span class="closeBtn" onClick={props.spinachRecommend}>&times;</span>
                <h1 className='modalTitle'> Spinich </h1>
                <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                <div className='suggestionWrapper'>
                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Recommended:</h3>

                        <BeanDescription /> 
                        <BroccoliDescription /> 
                        <CabbageDescription /> 
                        <CauliflowerDescription /> 
                        <PeaDescription /> 
                        <StrawberryDescription /> 
                        
                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>
                        
                        <p> No detrimental plants. Able to grow anything next to spinich. </p>

                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(SpinachModal)