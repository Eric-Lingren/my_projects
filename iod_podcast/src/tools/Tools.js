import React from 'react';
import './tools-styles.css';
import { withAuthProvider } from '../context/AuthProvider'

function Tools(props) {
    return (
        <div className={props.isAuthenticated? 'tools-wrapper' : 'tools-wrapper user-not-authenticated'}>
            <h2 className='tools-header'> Here are some other tools you can use for project and task management: </h2>
            <div className='tools-cards-wrapper'>
                <div className='tools-card'>
                    <h3 className='tools-card-title'> 15Five: </h3>
                    <p>Used company wide. </p>
                    <a className='link-url' href='https://www.15five.com/' target='_blank' rel='noopener noreferrer'> Check it out here! </a> 
                </div>
                <div className='tools-card'>
                    <h3 className='tools-card-title'>Asana:</h3>
                    <p>Used by the marketing team. </p>
                    <a className='link-url' href='https://asana.com/' target='_blank' rel='noopener noreferrer' > Check it out here! </a> 
                </div>
                <div className='tools-card'>
                    <h3 className='tools-card-title'>Trello:</h3>
                    <p>Used by the IT team. </p>
                    <a className='link-url' href='https://trello.com' target='_blank' rel='noopener noreferrer'> Check it out here! </a> 
                </div>
                <div className='tools-card'>
                    <h3 className='tools-card-title'> Toodledo: </h3>
                    <p>Used by Alan Fine. </p>
                    <a className='link-url' href='https://www.toodledo.com/' target='_blank' rel='noopener noreferrer'> Check it out here! </a> 
                </div>
                <div className='tools-card'>
                    <h3 className='tools-card-title'> OneNote: </h3>
                    <p>Used by Bill Bennett. </p>
                    <a className='link-url' href='https://www.onenote.com/' target='_blank' rel='noopener noreferrer'> Check it out here! </a> 
                </div>
            </div>
            <div className='tools-cards-wrapper'>
                <h2 className='tools-templates-header'> If you are looking for more robust templates to use for your project management planning, there are a huge varietly of free and downloadable resources  
                    <a className='link-url' href='https://www.workamajig.com/blog/project-management-templates' target='_blank' rel='noopener noreferrer'>  here </a>
                and
                    <a className='link-url' href='https://venngage.com/templates/proposals' target='_blank' rel='noopener noreferrer'>  here. </a>
                </h2>
            </div>
            
        </div>
    );
}

export default withAuthProvider(Tools);