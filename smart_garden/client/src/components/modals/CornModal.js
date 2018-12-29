import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeanDescription from '../plantDescriptions/BeanDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import MelonDescription from '../plantDescriptions/MelonDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import SquashDescription from '../plantDescriptions/SquashDescription';
import SunflowerDescription from '../plantDescriptions/SunflowerDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

const CornModal = (props) => {

    const show = props.showCornRecommend

    return(

        <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
            <div class="modal-content">
                <span class="closeBtn" onClick={props.cornRecommend}>&times;</span>
                <h1 className='modalTitle'> Corn </h1>
                <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                <div className='suggestionWrapper'>
                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Recommended:</h3>

                        <BeanDescription />
                        <CucumberDescription />
                        <LettuceDescription />
                        <MelonDescription />
                        <PeaDescription />
                        <PotatoDescription />
                        <SquashDescription />
                        <SunflowerDescription />

                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>

                        <TomatoDescription />
                        
                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(CornModal)