import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import CeleryDescription from '../plantDescriptions/CeleryDescription';
import CornDescription from '../plantDescriptions/CornDescription';
import DillDescription from '../plantDescriptions/DillDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import MelonDescription from '../plantDescriptions/MelonDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import RadishDescription from '../plantDescriptions/RadishDescription';
import SageDescription from '../plantDescriptions/SageDescription';
import SunflowerDescription from '../plantDescriptions/SunflowerDescription';

const CucumberModal = (props) => {

    const show = props.showCucumberRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.cucumberRecommend}>&times;</span>
                    <h1 className='modalTitle'> Cucumber </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <BeanDescription />
                            <CauliflowerDescription />
                            <CeleryDescription />
                            <CornDescription />
                            <DillDescription />
                            <LettuceDescription />
                            <OnionDescription />
                            <PeaDescription />
                            <RadishDescription />
                            <SunflowerDescription />
                           
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <MelonDescription />
                            <PotatoDescription />
                            <SageDescription />

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(CucumberModal)