import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'
import BeetDescription from '../plantDescriptions/BeetDescription';
import BroccoliDescription from '../plantDescriptions/BroccoliDescription';
import CabbageDescription from '../plantDescriptions/CabbageDescription';
import CarrotDescription from '../plantDescriptions/CarrotDescription';
import CatnipDescription from '../plantDescriptions/CatnipDescription';
import CauliflowerDescription from '../plantDescriptions/CauliflowerDescription';
import CeleryDescription from '../plantDescriptions/CeleryDescription';
import CornDescription from '../plantDescriptions/CornDescription';
import CucumberDescription from '../plantDescriptions/CucumberDescription';
import EggplantDescription from '../plantDescriptions/EggplantDescription';
import GarlicDescription from '../plantDescriptions/GarlicDescription';
import LeekDescription from '../plantDescriptions/LeekDescription';
import OnionDescription from '../plantDescriptions/OnionDescription';
import PeaDescription from '../plantDescriptions/PeaDescription';
import PepperDescription from '../plantDescriptions/PepperDescription';
import PotatoDescription from '../plantDescriptions/PotatoDescription';
import RadishDescription from '../plantDescriptions/RadishDescription';
import ShallotDescription from '../plantDescriptions/ShallotDescription';
import SquashDescription from '../plantDescriptions/SquashDescription';
import StrawberryDescription from '../plantDescriptions/StrawberryDescription';
import SunflowerDescription from '../plantDescriptions/SunflowerDescription';
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
                            <CarrotDescription />
                            <CatnipDescription />
                            <CauliflowerDescription />
                            <CeleryDescription />
                            <CornDescription />
                            <CucumberDescription />
                            <EggplantDescription />
                            <PeaDescription />
                            <PotatoDescription />
                            <RadishDescription />
                            <SquashDescription />
                            <StrawberryDescription />
                            <TansyDescription />
                            <TomatoDescription />
                       
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>

                            <GarlicDescription />
                            <LeekDescription />
                            <OnionDescription />
                            <PepperDescription />
                            <SunflowerDescription />
                            <ShallotDescription />

                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(BeanModal)

