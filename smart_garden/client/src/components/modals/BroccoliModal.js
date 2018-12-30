import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

import BeanDescription from '../plantDescriptions/BeanDescription';
import BeetDescription from '../plantDescriptions/BeetDescription';
import CabbageDescription from '../plantDescriptions/CabbageDescription';
import CarrotDescription from '../plantDescriptions/CarrotDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import CeleryDescription from '../plantDescriptions/CeleryDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import DillDescription from '../plantDescriptions/DillDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import MarigoldDescription from '../plantDescriptions/MarigoldDescription';
import MintDescription from '../plantDescriptions/MintDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import RosemaryDescription from '../plantDescriptions/RosemaryDescription';
import SageDescription from '../plantDescriptions/SageDescription';
import ThymeDescription from '../plantDescriptions/ThymeDescription';
import StrawberryDescription from '../plantDescriptions/StrawberryDescription';

const BroccoliModal = (props) => {

    const show = props.showBroccoliRecommend

    return(

        <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
            <div class="modal-content">
                <span class="closeBtn" onClick={props.broccoliRecommend}>&times;</span>
                <h1 className='modalTitle'> Broccoli </h1>
                <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                <div className='suggestionWrapper'>
                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Recommended:</h3>

                        <BeetDescription />         
                        <CarrotDescription /> 
                        <CeleryDescription /> 
                        <CucumberDescription />
                        <DillDescription /> 
                        <MarigoldDescription />
                        <MintDescription />
                        <OnionDescription />
                        <RosemaryDescription />
                        <PotatoDescription /> 
                        <SageDescription /> 
                        <ThymeDescription /> 
                        
                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>

                        <BeanDescription /> 
                        <CabbageDescription /> 
                        <CauliflowerDescription />
                        <LettuceDescription /> 
                        <StrawberryDescription />

                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(BroccoliModal)