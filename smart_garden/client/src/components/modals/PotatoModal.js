import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import CabbageDescription from '../plantDescriptions/CabbageDescription';
import CarrotDescription from '../plantDescriptions/CarrotDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import CornDescription from '../plantDescriptions/CornDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import PumpkinDescription from '../plantDescriptions/PumpkinDescription';
import SquashDescription from '../plantDescriptions/SquashDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

const PotatoModal = (props) => {

    const show = props.showPotatoRecommend

    return(

        <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
            <div class="modal-content">
                <span class="closeBtn" onClick={props.potatoRecommend}>&times;</span>
                <h1 className='modalTitle'> Potato </h1>
                <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                <div className='suggestionWrapper'>
                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Recommended:</h3>
                        
                        <BeanDescription /> 
                        <BroccoliDescription /> 
                        <CabbageDescription /> 
                        <CauliflowerDescription /> 
                        <CornDescription /> 
                        <PeaDescription /> 

                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>

                        <CucumberDescription />
                        <CarrotDescription />
                        <PumpkinDescription /> 
                        <SquashDescription />
                        <TomatoDescription />

                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(PotatoModal)