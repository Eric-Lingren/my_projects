import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BasilDescription from '../plantDescriptions/BasilDescription';
import BeanDescription from '../plantDescriptions/BeanDescription';
import CilantroDescription from '../plantDescriptions/CilantroDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import EggplantDescription from '../plantDescriptions/EggplantDescription';
import GrapeDescription from '../plantDescriptions/GrapeDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';
import SquashDescription from '../plantDescriptions/SquashDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

const RadishModal = (props) => {

    const show = props.showRadishRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.radishRecommend}>&times;</span>
                    <h1 className='modalTitle'> Radish </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <BasilDescription />
                            <BeanDescription />
                            <CilantroDescription />
                            <CucumberDescription />
                            <EggplantDescription />
                            <LettuceDescription />
                            <OnionDescription />
                            <PeaDescription />
                            <SpinichDescription />
                            <SquashDescription />
                            <TomatoDescription />
                            
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            
                            <GrapeDescription />
                            
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(RadishModal)