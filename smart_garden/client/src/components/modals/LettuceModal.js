import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import AsparagusDescription from '../plantDescriptions/AsparagusDescription';
import BeanDescription from '../plantDescriptions/BeanDescription';
import BeetDescription from '../plantDescriptions/BeetDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import BrusselsproutDescription from '../plantDescriptions/BrusselsproutDescription';
import CarrotDescription from '../plantDescriptions/CarrotDescription';
import CeleryDescription from '../plantDescriptions/CeleryDescription';
import EggplantDescription from '../plantDescriptions/EggplantDescription';
import GrapeDescription from '../plantDescriptions/GrapeDescription';
import OkraDescription from '../plantDescriptions/OkraDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import RadishDescription from '../plantDescriptions/RadishDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';

const LettuceModal = (props) => {

    const show = props.showLettuceRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.lettuceRecommend}>&times;</span>
                    <h1 className='modalTitle'> Lettuce </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <AsparagusDescription />
                            <BeanDescription />
                            <BeetDescription />
                            <BrusselsproutDescription />
                            <CarrotDescription />
                            <EggplantDescription />
                            <OkraDescription />
                            <OnionDescription />
                            <PeaDescription />
                            <RadishDescription />
                            <SpinichDescription />

                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <BroccoliDescription />
                            <CeleryDescription />
                            <GrapeDescription />
                               
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(LettuceModal)