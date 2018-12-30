import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BasilDescription from '../plantDescriptions/BasilDescription';
import BeanDescription from '../plantDescriptions/BeanDescription';
import BrusselsproutDescription from '../plantDescriptions/BrusselsproutDescription';
import CilantroDescription from '../plantDescriptions/CilantroDescription';
import KaleDescription from '../plantDescriptions/KaleDescription';
import OkraDescription from '../plantDescriptions/OkraDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

const PepperModal = (props) => {

    const show = props.showPepperRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.pepperRecommend}>&times;</span>
                    <h1 className='modalTitle'> Peppers </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <BasilDescription />
                            <CilantroDescription />
                            <OkraDescription />
                            <OnionDescription />
                            <SpinichDescription />
                            <TomatoDescription />

                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <BeanDescription />
                            <BrusselsproutDescription />
                            <KaleDescription />

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(PepperModal)