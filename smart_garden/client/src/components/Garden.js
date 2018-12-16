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
 
       let table = '';

        for(let y = 1;y <= height;y++){
         table += `<tr className='tableRow'>`;
         for(let x = 1; x <= width; x++){
            table += '<td>' + x + '</td>';
         }
         table += '</tr>';
        }

        let gardenPlot = document.write('<table>' + table + '</table>');
        this.setState({
            gardenPlot: gardenPlot,
        })

    }

    render() {
        return(
            <div>
                <form>
                    Garden Height <input type='number' placeholder='10' name='plotHeight' value={this.state.plotHeight} onChange={this.handleChange} ></input>
                    Garden Width <input type='number' placeholder='20' name='plotWidth' value={this.state.plotWidth} onChange={this.handleChange}></input>
                    <button onClick={this.handleSubmit}>Create Garden Plot</button>
                </form>
                This is the Garden Component
               <div> {this.state.gardenPlot} </div>
                    
                
                
                
            </div>
        )
    }
    
    
}

export default Garden