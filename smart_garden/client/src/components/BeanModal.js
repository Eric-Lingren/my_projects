import React from 'react';
import {withCompanion} from '../context/CompanionProvider';
import '../css/modalStyle.css'

const BeanModal = (props) => {
  
    console.log(props)
    const show = props.showBeanRecommend

    // function openBlackjackModal(){
    //     modal.style.display = 'block'
    // }
    // function closeBlackjackModal(){
    //     modal.style.display = 'none'
    // }
// {/* <div className= {show ? 'modalShow' : 'modalHide'} >
            //     Bean Modal Test
            // </div> */}
    return(

            
            <div id="simpleModal" className= {show ? 'modalShow' : 'modalHide'} >
                <div class="modal-content">
                    <span class="closeBtn" onClick={props.beanRecommend}>&times;</span>
                    bean Modal Test
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas beatae nisi aliquam laudantium ea, ex illo provident fugit, eius dolore quis quae corrupti vitae esse sequi sed natus voluptatem.</p>
                </div>
            </div>

    )
    
}

export default withCompanion(BeanModal)

