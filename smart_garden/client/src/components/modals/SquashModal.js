import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import CornDescription from '../plantDescriptions/CornDescription';
import MarigoldDescription from '../plantDescriptions/MarigoldDescription';
import MelonDescription from '../plantDescriptions/MelonDescription';
import OkraDescription from '../plantDescriptions/OkraDescription';
import OreganoDescription from '../plantDescriptions/OreganoDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import PumpkinDescription from '../plantDescriptions/PumpkinDescription';
import RadishDescription from '../plantDescriptions/RadishDescription';
import TansyDescription from '../plantDescriptions/TansyDescription';

const SquashModal = (props) => {

    const show = props.showSquashRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.squashRecommend}>&times;</span>
                    <h1 className='modalTitle'> Squash </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <BeanDescription /> 
                            <CornDescription /> 
                            <MarigoldDescription /> 
                            <MelonDescription /> 
                            <OkraDescription /> 
                            <OreganoDescription /> 
                            <PumpkinDescription /> 
                            <RadishDescription /> 
                            <TansyDescription /> 

                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <PotatoDescription /> 
                            
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(SquashModal)