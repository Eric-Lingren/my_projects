import React, { Component} from 'react';
import '../css/addPlantForm.css';
import axios from 'axios';

 class AddPlantForm extends Component {
     constructor(){
         super()
         this.state = {
            type: '',
            varitey: '',
            plotColor: ''
         }
     }

     handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('/plants', this.state ).then(res => {
        })
    }

    render(){
        return(
            <div>
                <form className='addPlantForm'>
                <fieldset className='fieldSet'>
                    <legend>Add New Plant</legend>
                    Type: <input 
                                name='type' 
                                className='newPlantInput' 
                                type='text' 
                                placeholder='Pumpkin' 
                                onChange={this.handleChange}
                                required/>
                    Varitey: <input 
                                name='varitey' 
                                className='newPlantInput' 
                                type='text' placeholder='Jackolantern' 
                                onChange={this.handleChange}/><br></br>
                    Plot Color: <input 
                                name='plotColor' 
                                className='newPlantColorInput' 
                                type='color' 
                                onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Add</button>
                    </fieldset>
                </form>
            </div>
        )
    }
    
}

export default AddPlantForm