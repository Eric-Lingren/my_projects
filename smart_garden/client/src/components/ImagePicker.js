import React, { Component } from 'react'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'
import '../css/imageSelector.css'
import {withPlants} from '../context/PlantProvider';
import axios from 'axios'


class PlantImagePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null,
      imageUrl: [],
    }
    this.onPick = this.onPick.bind(this)
  }

  componentDidMount(){
    this.getImages()
    
  }
 
  getImages = () => {
    axios.get('/images').then(res => {
      const images = res.data
      images.forEach(image => {
        this.setState(prevState => ({
          imageUrl: [...prevState.imageUrl, image.imageUrl]
        }))
      });
      
    })
  }

  onPick(image) {
    this.setState({image})
  }
 
  onSelect = () => {
    this.props.setImageToggle()
    this.props.setPlantUrl(this.state.image)
  }

  render() {
    return (
      <div className='containerWrapper'>
        <ImagePicker 
          images={this.state.imageUrl.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPick}
        />
        <button type="button" onClick={this.onSelect}>OK</button>
      </div>
    )
  }
}
 
export default withPlants(PlantImagePicker)