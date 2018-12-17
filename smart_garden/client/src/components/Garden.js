import React, { Component } from 'react';
import '../css/gardenStyle.css'

class Garden extends Component {
    constructor(){
        super()
        this.state = {
            plotHeight: '',
            plotWidth: '',
            gardenPlot: '',
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = () => {
       const height = this.state.plotHeight;
       const width = this.state.plotWidth;
 
       let table = "<table class='table'>";

        for(let y = 1;y <= height; y++){
         table += '<tr>';
         for(let x = 1; x <= width; x++){
            table += "<td className='cell'>" + x + '</td>';
         }
         table += '</tr>';
        }
        table += '</table>';

        let gardenPlot = document.write(table);

        this.setState({
            gardenPlot: gardenPlot,
        })

    }

    render() {
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
                            </input><br></br>
                    <button onClick={this.handleSubmit}>Generate Garden Plot</button>
                    </fieldset>
                </form>

               <div> some text here.  This is where the garden grid goes. {this.state.gardenPlot} </div>   
                
            </div>
        )
    }
    
    
}

export default Garden