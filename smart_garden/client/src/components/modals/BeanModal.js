import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeetDescription from '../plantDescriptions/BeetDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import CabbageDescription from '../plantDescriptions/CabbageDescription';
import GarlicDescription from '../plantDescriptions/GarlicDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';

import PotatoDescription from '../plantDescriptions/PotatoDescription';
import TansyDescription from '../plantDescriptions/TansyDescription';
import TomatoDescription from '../plantDescriptions/TomatoDescription';

const BeanModal = (props) => {

    const show = props.showBeanRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.beanRecommend}>&times;</span>
                    <h1 className='modalTitle'> Beans </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            
                            <BeetDescription />
                            <BroccoliDescription />
                            <CabbageDescription />
                            <PotatoDescription />
                            <TansyDescription />
                            <TomatoDescription />
                            
                            <p>  cabbage carrots Catnip repels flea beetles cauliflower celery corn cucumber eggplant peas 
                                raddish squash strawberry</p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <GarlicDescription />
                            <OnionDescription />

                            <p>fennel Leeks pepper sunflower Shallot  </p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(BeanModal)

