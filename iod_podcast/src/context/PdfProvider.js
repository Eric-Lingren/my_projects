import React, { Component } from 'react';

const PdfProviderContext = React.createContext()

class PdfProviderProvider extends Component {
    constructor(){
        super()
        this.state = {
            title:'Project Title Here',
            purpose: '',
            workToAccomplish: '',
            deliverables: '',
            timeline: '',
            team: '',
            resources: '',
            approvals: '',
            communications: '',
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
            <PdfProviderContext.Provider 
                value={{
                    ...this.state,
                    handleChange: this.handleChange
                }}>
                { this.props.children }
            </PdfProviderContext.Provider>
        )
    }
}

export default PdfProviderProvider

export const withPdfProvider = C => props => (
    <PdfProviderContext.Consumer>
        {value => <C {...props} {...value}/>}
    </PdfProviderContext.Consumer>
)


