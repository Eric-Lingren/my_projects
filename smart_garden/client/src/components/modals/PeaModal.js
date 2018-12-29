import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import CarrotDescription from '../plantDescriptions/CarrotDescription';
import ChiveDescription from '../plantDescriptions/ChiveDescription';
import CornDescription from '../plantDescriptions/CornDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import EggplantDescription from '../plantDescriptions/EggplantDescription';
import GarlicDescription from '../plantDescriptions/GarlicDescription';
import LeekDescription from '../plantDescriptions/LeekDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import MelonDescription from '../plantDescriptions/MelonDescription';
import MintDescription from '../plantDescriptions/MintDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import RadishDescription from '../plantDescriptions/RadishDescription';
import ShallotDescription from '../plantDescriptions/ShallotDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';

const PeaModal = (props) => {

    const show = props.showPeaRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.peaRecommend}>&times;</span>
                    <h1 className='modalTitle'> Peas </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <BeanDescription /> 
                            <CarrotDescription /> 
                            <CornDescription /> 
                            <CucumberDescription /> 
                            <EggplantDescription /> 
                            <LettuceDescription /> 
                            <MelonDescription /> 
                            <MintDescription /> 
                            <RadishDescription /> 
                            <SpinichDescription /> 

                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <ChiveDescription />
                            <GarlicDescription /> 
                            <LeekDescription /> 
                            <OnionDescription /> 
                            <ShallotDescription />

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(PeaModal)