import React, { Component } from 'react';
import LiveVideo from './LiveVideo'
import Canvas from './Canvas'

class App extends Component {
  render() {
    return (
      <div>
        <LiveVideo />
        <Canvas />
      </div>
    );
  }
}

export default App;
