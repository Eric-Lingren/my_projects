import React, { Component } from 'react';
import '../css/gardenStyle.css'
import {withPlants} from '../context/PlantProvider'

class Garden extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            plotHeight: 0,
            plotWidth: 0,
            gardenPlot: [],    
        }
        this.gardenPlot = []

    }

    // this.setState(prevState => ({
    //     gardenOption: {
    //         value: '',
    //         color: ''
    //     }
    // }))

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        //console.log(this.gardenPlot)
        e.preventDefault()
    //    const height = this.state.plotHeight;
    //    const width = this.state.plotWidth;
    console.log(this.gardenPlot)

    }

    cellClick = (e) => {
        e.target.style.backgroundColor=`${this.props.selectedPlotColor}`
        e.target.textContent=`${this.props.selectedPlantType}`
    }

    render() {
        const height = []
        const width = []
        for(let y = 0; y < this.state.plotHeight; y++){
            height.push(y)
        }
        for(let x = 0; x < this.state.plotWidth; x++){
            width.push(x)
         }
        const gardenColumns = width.map(index => {
            return <td className='cell' onClick={this.cellClick} > </td>
        })
        this.gardenPlot = height.map(ind => {
            return <tr>{gardenColumns}</tr>
        })
        
        return(
            <div>
                <form className='gardenGenerateForm'>
                <fieldset className='fieldSetNewGarden'>
                <legend>Create New Garden</legend>
                    Height: <input  
                                name='plotHeight' 
                                type='number' 
                                className='gardenSizeInput'
                                placeholder='10'
                                value={this.state.plotHeight} 
                                onChange={this.handleChange} >
                            </input>
                    Width:  <input 
                                name='plotWidth' 
                                type='number' 
                                className='gardenSizeInput'
                                placeholder='20' 
                                value={this.state.plotWidth} 
                                onChange={this.handleChange}>
                            </input>
                    Garden Name: 
                            <input
                                name='gardenName' 
                                type='text' 
                                placeholder='My First Garden'>
                            </input>
                            {/* <input name = "gardenPlot" value = {gardenBox} style ={{display: "none"}} onChange = {this.handleChange}/>  */}
                    <button onClick={this.handleSubmit}>Save to My Gardens</button>
                    </fieldset>
                </form>

               <div id='gardenbox'> <table className='gardenTable'>{this.gardenPlot}</table> </div>   
                
            </div>
        )
    }
    
    
}

export default withPlants(Garden)