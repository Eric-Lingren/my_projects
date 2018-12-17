import React, { Component } from 'react';
import '../css/gardenStyle.css'

class Garden extends Component {
    constructor(){
        super()
        this.state = {
            plotHeight: 0,
            plotWidth: 0,
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


 
    //    let table = "<table class='table'>";

    //     for(let y = 1;y <= height; y++){
    //      table += '<tr>';
    //      for(let x = 1; x <= width; x++){
    //         table += "<td className='cell'>" + x + '</td>';
    //      }
    //      table += '</tr>';
    //     }
    //     table += '</table>';

    //     let gardenPlot = document.getElementById('gardenbox').innerHTML(table)

    //     this.setState({
    //         gardenPlot: gardenPlot,
    //     })

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
        console.log(height)
        console.log(width)
        const gardenColumns = width.map(index => {
            return <td className='cell'>1</td>
        })
        const gardenBox = height.map(ind => {
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
                            </input><br></br>
                    <button onClick={this.handleSubmit}>Generate Garden Plot</button>
                    </fieldset>
                </form>

               <div id='gardenbox'> some text here.  This is where the garden grid goes. <table className='gardenTable'>{gardenBox}</table> </div>   
                
            </div>
        )
    }
    
    
}

export default Garden