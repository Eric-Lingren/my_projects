import React from 'react';
import { withAuthProvider } from '../context/AuthProvider';
import './company-projects-styles.css';

function StartProject(props) {
    return (
        <div className={props.isAuthenticated ? 'company-projects-wrapper' : 'company-projects-wrapper user-not-authenticated'}>
            <input type="checkbox" id="zoomCheck"></input>
            <label htmlFor="zoomCheck">
            <div className='company-projects-image-1'></div>
            
            <div className='company-projects-image-2'></div>
            <div className='company-projects-image-3'></div>
            </label>
        </div>
    );
}

export default withAuthProvider(StartProject);