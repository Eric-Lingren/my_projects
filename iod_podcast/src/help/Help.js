import React from 'react';
import { withAuthProvider } from '../context/AuthProvider'
import './help-styles.css';

function Help(props) {
    return (
        <div className={props.isAuthenticated? 'help-wrapper' : 'help-wrapper user-not-authenticated'}>
            <h2 className='help-header'>Do you need help with you project?</h2>
            <h2 className='help-header'>Do you have questions or need clarification?</h2>
            <h3>Adam Cole is here to help!</h3>
            <h4>Reach out to him via phone or email.</h4>
            <div className='contact-card-wrapper'>
                    <div className='contact-card'>
                        <h5 className='contact-card-heading'> Email Adam: </h5>
                        <a className='help-contact-link' href='mailto:adamcole@insideoutdev.com'> adamcole@insideoutdev.com </a>
                    </div>
                    <div className='contact-card'>
                        <h5 className='contact-card-heading'> Call Adam: </h5>
                        <a className='help-contact-link' href='tel:1-801-232-1992'> (801)-232-1992 </a>
                    </div>
            </div>
        </div>
    );
}

export default withAuthProvider(Help);