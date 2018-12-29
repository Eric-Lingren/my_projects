import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import BeetDescription from '../plantDescriptions/BeetDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import CabbageDescription from '../plantDescriptions/CabbageDescription';
import CarrotDescription from '../plantDescriptions/CarrotDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import PepperDescription from '../plantDescriptions/PepperDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import SageDescription from '../plantDescriptions/SageDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';
import StrawberryDescription from '../plantDescriptions/StrawberryDescription';

const OnionModal = (props) => {

    const show = props.showOnionRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.onionRecommend}>&times;</span>
                    <h1 className='modalTitle'> Onion </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <BeetDescription />
                            <BroccoliDescription />
                            <CabbageDescription />
                            <CarrotDescription />
                            <CucumberDescription />
                            <LettuceDescription />
                            <PepperDescription />
                            <PotatoDescription />
                            <SpinichDescription />
                            <StrawberryDescription />

                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <BeanDescription />
                            <PeaDescription />
                            <SageDescription />

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(OnionModal)