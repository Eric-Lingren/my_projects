import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import CeleryDescription from '../plantDescriptions/CeleryDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import DillDescription from '../plantDescriptions/DillDescription';
import GrapeDescription from '../plantDescriptions/GrapeDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import SageDescription from '../plantDescriptions/SageDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';
import StrawberryDescription from '../plantDescriptions/StrawberryDescription';
import ThymeDescription from '../plantDescriptions/ThymeDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

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

                        <BeanDescription />
                        <CeleryDescription />
                        <CucumberDescription />
                        <DillDescription />
                        <LettuceDescription />
                        <OnionDescription />
                        <PotatoDescription />
                        <SageDescription />
                        <SpinichDescription />
                        <ThymeDescription />

                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>

                        <BroccoliDescription />
                        <CauliflowerDescription />
                        <GrapeDescription />
                        <StrawberryDescription />
                        <TomatoDescription />

                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(CabbageModal)