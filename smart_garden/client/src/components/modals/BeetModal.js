import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import AsparagusDescription from '../plantDescriptions/AsparagusDescription';
import BeanDescription from '../plantDescriptions/BeanDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import BrusselsproutDescription from '../plantDescriptions/BrusselsproutDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';

const BeetModal = (props) => {

    const show = props.showBeetRecommend

    return(

        <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
            <div class="modal-content">
                <span class="closeBtn" onClick={props.beetRecommend}>&times;</span>
                <h1 className='modalTitle'> Beet </h1>
                <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                <div className='suggestionWrapper'>
                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Recommended:</h3>

                        <AsparagusDescription /> 
                        <BroccoliDescription /> 
                        <BrusselsproutDescription /> 
                        <CauliflowerDescription /> 
                        <LettuceDescription /> 
                        <OnionDescription /> 
                        
                    </div>

                    <div className='suggestionContainer'>
                        <h3 className='suggestionTitle'>Not Recommended:</h3>
                        
                        <BeanDescription /> 

                    </div>
                </div>
                
            </div>
        </div>
    )  
}

export default withCompanion(BeetModal)