import React, { Component } from 'react';
import Webcam from "react-webcam";

class LiveVideo extends Component {
  
  componentDidMount(){
    const myCanvas = this.refs.myCanvas
    const context = myCanvas.getContext('2d')
    console.log(myCanvas)

    const myVideo = this.refs.myVideo
    console.log(myVideo)

    let imageCapture = setInterval(this.capture, 1000)

  }


  capture = () => {
    console.log(this.webcam)
    const imageSrc = this.myVideo.getScreenshot();
    console.log(imageSrc)
  };



  render() {
    const videoConstraints = {
      // width: 640,
      // height: 425,
      facingMode: "user"
    };
    
    return (
      
      <div>

        <Webcam 
          audio={false}
          ref='myVideo'
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}/>

        <canvas ref='myCanvas' width={640} height={425}/>

      </div>
    );
  }
}

export default LiveVideo;
