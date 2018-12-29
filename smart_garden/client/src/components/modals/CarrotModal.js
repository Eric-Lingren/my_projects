import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css';
import BeanDescription from '../plantDescriptions/BeanDescription';
import DillDescription from '../plantDescriptions/DillDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import ParsleyDescription from '../plantDescriptions/ParsleyDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import RadishDescription from '../plantDescriptions/RadishDescription';
import RosemaryDescription from '../plantDescriptions/RosemaryDescription';
import SageDescription from '../plantDescriptions/SageDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

const CarrotModal = (props) => {

    const show = props.showCarrotRecommend

    return(

        <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
            <div class="modal-content">
                <span class="closeBtn" onClick={props.carrotRecommend}>&times;</span>
                <h1 className='modalTitle'> Carrots </h1>
                <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                <div className='suggestionWrapper'>
                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Recommended:</h3>

                    <BeanDescription />
                    <LettuceDescription />
                    <OnionDescription />
                    <PeaDescription />
                    <RadishDescription />
                    <RosemaryDescription />
                    <SageDescription />
                    <TomatoDescription />

                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>

                        <DillDescription />
                        <ParsleyDescription />
                        
                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(CarrotModal)