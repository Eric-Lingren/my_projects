import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import PepperDescription from '../plantDescriptions/PepperDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';
import ThymeDescription from '../plantDescriptions/ThymeDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

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

                        <BeanDescription /> 
                        <PeaDescription /> 
                        <PepperDescription /> 
                        <PotatoDescription /> 
                        <SpinichDescription /> 
                        <ThymeDescription /> 
                        <TomatoDescription /> 

                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>
                        <p> No detrimental plants. Able to grow anything next to eggplant. </p>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(EggplantModal)