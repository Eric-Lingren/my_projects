import React, { Component } from 'react'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import '../css/imageSelector.css'
import {withPlants} from '../context/PlantProvider';
 
//import images from local
import img1 from '../css/image/chiliPepper.jpg'
import img2 from '../css/image/jalapeno.png'
import img3 from '../css/image/orangeBell.jpeg'
import img4 from '../css/image/redBell.jpeg'
import img5 from '../css/image/greenBell.jpeg'
 
const imageList = [img1, img2, img3, img4, img5]
 
class PlantImagePicker extends Component {
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
 
  onSelect = () => {
    console.log(this.state.image)
    this.props.setImageToggle()
  }

  render() {
    return (
      <div className='containerWrapper'>
        <ImagePicker 
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPick}
        />
        <button type="button" onClick={this.onSelect}>OK</button>
      </div>
    )
  }
}
 
export default withPlants(PlantImagePicker)