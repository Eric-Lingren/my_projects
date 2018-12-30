import React, { Component} from 'react';
import '../css/addPlantForm.css';
import axios from 'axios';
import {withPlants} from '../context/PlantProvider';

 class AddPlantForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            plantType: '',
            varitey: '',
            imageUrl: '',
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({imageUrl: nextProps.selectedPlantUrl})
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/plants', this.state ).then(res => {
            this.props.getPlants()
            this.resetForm()
        })
    }

    handleToggle = e => {
        e.preventDefault()
        this.props.setImageToggle()
    }

    resetForm = () => {
        this.setState({
            plantType: '',
            varitey: '',
            imageUrl: '',
        })
    }

    render(){
        return(
            <div className='addPlantContainer'>
                <h4 className='titleHeader'> Add Plant to List:</h4>
                <form className='addPlantForm'>
                    Type: <input 
                                name='plantType' 
                                className='newPlantInput1' 
                                type='text' 
                                placeholder='Pumpkin' 
                                onChange={this.handleChange}
                                required/>
                    Varitey: <input 
                                name='varitey' 
                                className='newPlantInput2' 
                                type='text' 
                                placeholder='Jackolantern' 
                                onChange={this.handleChange}/><br></br>
                    {/* Plot Color: <input 
                                name='plotColor' 
                                className='newPlantColorInput' 
                                type='color' 
                                onChange={this.handleChange}/><br></br> */}
                    <button className='addPlantButton' onClick={this.handleToggle}> Choose An Image </button>
                    
                    <button className='addPlantButton' onClick={this.handleSubmit}>Add to List</button>
                </form>
                
            </div>
        )
    }  
}

export default withPlants(AddPlantForm)