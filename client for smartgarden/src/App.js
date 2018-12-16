import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AdminCms from './components/AdminCms'


class App extends Component {
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={props => <Home {...props} />   }/>
                    <Route path="/admin"  render={props => <AdminCms {...props}/>}/>
                </Switch>
            </div>
        )
    }
}

export default App