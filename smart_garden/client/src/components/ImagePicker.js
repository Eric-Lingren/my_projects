import React, { Component } from 'react'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import '../css/imageSelector.css'
 
//import images from local
import img1 from '../css/image/chiliPepper.jpg'
import img2 from '../css/image/jalapeno.png'
// import img2 from './images/kitten/201.jpg'
// import img3 from './images/kitten/202.jpg'
// import img4 from './images/kitten/203.jpg'
 
const imageList = [img1, img2]
 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
    this.onPick = this.onPick.bind(this)
  }
 
  onPick(image) {
    this.setState({image})
  }
 
  render() {
    return (
      <div>
        <ImagePicker 
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPick}
        />
        <button type="button" onClick={() => console.log(this.state.image)}>OK</button>
      </div>
    )
  }
}
 
export default App