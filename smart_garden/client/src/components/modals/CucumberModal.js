import React from 'react';
import {withCompanion} from '../../context/CompanionProvider';
import '../../css/modalStyle.css'

const CucumberModal = (props) => {

    const show = props.showCucumberRecommend

    return(

            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.cucumberRecommend}>&times;</span>
                    <h1 className='modalTitle'> Cucumber </h1>
                    <h2 className='modalSubTitle'> Companion Planting Guide: </h2>

                    <div className='suggestionWrapper'>
                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Recommended:</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, dicta quaerat culpa quibusdam eveniet doloremque corporis deleniti dolore quidem totam. Provident dignissimos labore rerum reiciendis minima magnam distinctio natus quod.</p>
                        </div>

                        <div className='suggestionContainer'>
                            <h3 className='suggestionTitle'>Not Recommended:</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aspernatur deleniti recusandae repellat doloribus officia. Earum voluptatem delectus quas, asperiores eos nesciunt magnam, debitis optio illo adipisci cupiditate repellendus praesentium!</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    )  
}

export default withCompanion(CucumberModal)