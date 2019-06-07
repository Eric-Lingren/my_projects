import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import './start-project-styles.css';
import ProjectDocument from '../project-document/ProjectDocument'
import { withPdfProvider } from '../context/PdfProvider';
import { withAuthProvider } from '../context/AuthProvider';

class StartProject extends Component {

    generatePDF = () => {
        alert('works')
    }

    render(){
        return (
            <div className={this.props.isAuthenticated ? 'start-project-wrapper' : 'start-project-wrapper user-not-authenticated'}>
            <h3 className='start-project-heading'> Build a simple project management plan: </h3>
            <form className='form-pdf-builder'>
            <div className='input-wrapper'>
                <h3 className='input-title'>Project Title: </h3>
                <input type='text' name='title' placeholder='Title...' onChange={this.props.handleChange} value={this.props.title}></input>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'> What is the purpose of this project (what problem is it going to solve)? </h3>
                <textarea type='text' name='purpose' placeholder='Purpose... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.purpose}></textarea>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'> What work must be accomplished? </h3>
                <textarea type='textarea' name='workToAccomplish' placeholder='Work... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.workToAccomplish}></textarea>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'> What deliverables must be generated and reviewed? </h3>
                <textarea type='textarea' name='deliverables' placeholder='Deliverables... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.deliverables}></textarea>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'> What will the timeline be, including deadlines? </h3>
                <textarea type='textarea' name='timeline' placeholder='Timeline/Deadlines... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.timeline}></textarea>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'> Who will be on the team for this project and what role will they play? </h3>
                <textarea type='textarea' name='team' placeholder='Team Members... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.team}></textarea>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'> What resources are required to complete this project? </h3>
                <textarea type='textarea' name='resources' placeholder='Resources... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.resources}></textarea>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'> How will we control and approve each phase? </h3>
                <textarea type='textarea' name='approvals' placeholder='Approvals... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.approvals}></textarea>
            </div>
            <div className='input-wrapper'>
                <h3 className='input-title'>  What will be the ongoing communications plan? </h3>
                <textarea type='textarea' name='communications' placeholder='Communications... (grab and drag the corner if you need more room)' onChange={this.props.handleChange} value={this.props.communications}></textarea>
            </div>
            </form>
            <h3 className='start-project-heading'>View and print a PDF of your project management plan:</h3>
            <h6> (Not currently optimized for mobile) </h6>
                <PDFViewer style={{width: '1000px', height: '1000px', marginBottom: '100px'}}>
                    <ProjectDocument 
                        title={this.props.title}
                        purpose={this.props.purpose}
                        workToAccomplish={this.props.workToAccomplish}
                        deliverables={this.props.deliverables}
                        timeline={this.props.timeline}
                        team={this.props.team}
                        resources={this.props.resources}
                        approvals={this.props.approvals}
                        communications={this.props.communications}
                    />
                </PDFViewer>
                
            </div>
        );
    }
}

export default withAuthProvider(withPdfProvider(StartProject));