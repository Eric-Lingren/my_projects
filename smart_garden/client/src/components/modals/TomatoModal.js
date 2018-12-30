import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import AsparagusDescription from '../plantDescriptions/AsparagusDescription';
import BasilDescription from '../plantDescriptions/BasilDescription';
import BeanDescription from '../plantDescriptions/BeanDescription';
import BeetDescription from '../plantDescriptions/BeetDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import BrusselsproutDescription from '../plantDescriptions/BrusselsproutDescription';
import CabbageDescription from '../plantDescriptions/CabbageDescription';
import CarrotDescription from '../plantDescriptions/CarrotDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import CeleryDescription from '../plantDescriptions/CeleryDescription';
import CornDescription from '../plantDescriptions/CornDescription';
import DillDescription from '../plantDescriptions/DillDescription';
import KaleDescription from '../plantDescriptions/KaleDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import MelonDescription from '../plantDescriptions/MelonDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import OreganoDescription from '../plantDescriptions/OreganoDescription';
import ParsleyDescription from '../plantDescriptions/ParsleyDescription';
import PepperDescription from '../plantDescriptions/PepperDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import RadishDescription from '../plantDescriptions/RadishDescription';
import RosemaryDescription from '../plantDescriptions/RosemaryDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';
import ThymeDescription from '../plantDescriptions/ThymeDescription';

const TomatoModal = (props) => {

    const show = props.showTomatoRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.tomatoRecommend}>&times;</span>
                    <h1 className='modalTitle'> Tomato </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                           
                            <AsparagusDescription /> 
                            <BasilDescription /> 
                            <BeanDescription /> 
                            <CarrotDescription /> 
                            <CeleryDescription /> 
                            <DillDescription /> 
                            <LettuceDescription /> 
                            <MelonDescription /> 
                            <OnionDescription /> 
                            <OreganoDescription /> 
                            <ParsleyDescription /> 
                            <PepperDescription /> 
                            <RadishDescription /> 
                            <SpinichDescription /> 
                            <ThymeDescription /> 
                           
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <BeetDescription />
                            <BroccoliDescription />
                            <BrusselsproutDescription />
                            <CornDescription />
                            <CabbageDescription />
                            <CauliflowerDescription />
                            <KaleDescription />
                            <PotatoDescription />
                            <RosemaryDescription />

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(TomatoModal)