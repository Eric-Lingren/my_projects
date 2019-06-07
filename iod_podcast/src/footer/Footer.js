import React from 'react';
import './footer-styles.css'

function Footer() {
    return (
        <div className="footer">
            <div className='footer-iod-logo'> </div>
            <p className='footer-text'> © 2019 InsideOut Development, LLC. </p>
            <div className='contact-wrapper'>
                <p className='footer-text'> Questions, comments or suggestions? </p>
                <a className='contact-link' href='mailto:adamcole@insideoutdev.com'> Email Adam Cole </a>
            </div>
        </div>
    );
}

export default Footer;
