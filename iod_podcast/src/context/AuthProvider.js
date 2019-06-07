import React, { Component } from 'react';

const AuthProviderContext = React.createContext()

class AuthProvider extends Component {
    constructor(){
        super()
        this.state = {
            userEmail: '',
            isAuthenticated: localStorage.getItem('isAuthenticated') || false,
            loginAttempted: false,
            loginAttemptFailed: false,
        }
    }
    
    componentDidMount(){
        this.authenticateUser()
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({loginAttempted: true}, () => this.authenticateUser() )
        
    }

    authenticateUser = () => {
        let isValidLogin = this.state.userEmail.includes('@insideoutdev.com')
        if(isValidLogin || this.state.isAuthenticated){
            this.setState({isAuthenticated: true, loginAttemptFailed: false}, () => localStorage.setItem('isAuthenticated', this.state.isAuthenticated))
            
        } else {
            if(this.state.loginAttempted){
                this.setState({loginAttemptFailed: true})
            }
            this.setState({isAuthenticated: false})
        }
    }


    render(){
        return (
            <AuthProviderContext.Provider 
                value={{
                    ...this.state,
                    handleChange: this.handleChange,
                    handleSubmit: this.handleSubmit,
                }}>
                { this.props.children }
            </AuthProviderContext.Provider>
        )
    }
}

export default AuthProvider

export const withAuthProvider = C => props => (
    <AuthProviderContext.Consumer>
        {value => <C {...props} {...value}/>}
    </AuthProviderContext.Consumer>
)


