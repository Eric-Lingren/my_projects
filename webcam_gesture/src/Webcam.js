import React, { Component } from 'react';
import Webcam2 from "react-webcam";

class Webcam extends Component {
  
  capture = () => {
    const imageSrc = this.webcam.getScreenshot();
  };

  render() {
    const videoConstraints = {
      // width: 350,
      // height: 250,
      facingMode: "user"
    };
    console.dir(Webcam2)
    return (
      
      <div>
        <div>
			    <video id="video"></video>

          <Webcam2 
            audio={false}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}/>

			    <h5>Live Video</h5>
		    </div>

      <div>
        <canvas id="motion"></canvas>
        <h5>
          Motion Heatmap
          Score: <span id="score">?</span>
        </h5>
      </div>
    
      </div>
    );
  }
}

export default Webcam;
