import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BasilDescription from '../plantDescriptions/BasilDescription';
import BeetDescription from '../plantDescriptions/BeetDescription';
import CilantroDescription from '../plantDescriptions/CilantroDescription';
import DillDescription from '../plantDescriptions/DillDescription';
import LettuceDescription from '../plantDescriptions/LettuceDescription';
import MarigoldDescription from '../plantDescriptions/MarigoldDescription';
import ParsleyDescription from '../plantDescriptions/ParsleyDescription';
import SpinichDescription from '../plantDescriptions/SpinichDescription';
import TansyDescription from '../plantDescriptions/TansyDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';
import GarlicDescription from '../plantDescriptions/GarlicDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';

const AsparagusModal = (props) => {

    const show = props.showAsparagusRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.asparagusRecommend}>&times;</span>
                    <h1 className='modalTitle'> Asparagus </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>

                            <BasilDescription />
                            <BeetDescription />
                            <CilantroDescription />
                            <DillDescription />
                            <LettuceDescription />
                            <MarigoldDescription />
                            <ParsleyDescription />
                            <SpinichDescription />
                            <TansyDescription />
                            <TomatoDescription />
                           
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <GarlicDescription />
                            <OnionDescription />
                            <PotatoDescription />

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(AsparagusModal)
