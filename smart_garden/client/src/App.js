import React, { Component } from 'react';
import Home from './components/Home';
import Help from './components/Help';
import { BrowserRouter, Switch, Route } from "react-router-dom";


class App extends Component {
 
  render() {
    
    return (
        <div className="App">

          

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/help" component={Help} />
          </Switch>
          

        </div>
    )
  }
}

export default App;
