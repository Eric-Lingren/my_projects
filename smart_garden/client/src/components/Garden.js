import React, { Component } from 'react';
import '../css/gardenStyle.css'
import {withPlants} from '../context/PlantProvider'
import {withGardens} from '../context/GardenProvider'
import axios from 'axios'

class Garden extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            plotHeight: 0,
            plotWidth: 0,   
            gardenName: '',
            gardenData: []
        }
        this.gardenData = []
        this.gardenPlot = ''

    }
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // console.log(this.state.gardenName)
        console.log(this.gardenPlot)

        const postGarden = {
            gardenName: this.state.gardenName,
            plot: this.gardenPlot
        }
        
        const rows = this.gardenPlot.length
        console.log('garden has ' + rows + ' rows')

        const cols = this.gardenPlot[0].props.children.length
        console.log('this garden has ' + cols + ' columns')
        
        const plots = this.gardenPlot[0].props.children

        console.log('garden plots are : ' + plots)
        console.log(this.state.plotHeight)
        console.log(this.state.plotWidth)
        //console.log(postGarden)
        this.setState({
            gardenData: []
        })

        axios.post('/gardens', postGarden ).then(res => {
        })
    }

    //////  Data needed to save garden:
        // this.gardenplot.length === the number of rows
        // this.gardenplot.[index(for the row number)].props.children[index(for the cell number)]
        // this.gardenplot.[index(for the row number)].props.owner.memorizedProps.getPlants.selectedPlantID

    cellClick = (e) => {
        console.dir(e.target)
        e.target.style.backgroundColor=`${this.props.selectedPlotColor}`
        e.target.textContent=`${this.props.selectedPlantType}`
        console.log(e.target.innerHTML)
    }

    render() {
        const height = []
        const width = []
        const totalCells = (this.state.plotHeight * this.state.plotWidth)
        //console.log('total cells are '+ totalCells)

        for(let y = 1; y <= this.state.plotHeight; y++){
            height.push(y)
        }
        for(let x = 1; x <= this.state.plotWidth; x++){
            width.push(x)
         }

        // const gardenArray = []
        // for(let i = 1; i <= height.length; i++){
        //     gardenArray.push([i])
        //     for (let j = 1; j<= width.length; j++){
        //         gardenArray.push({cell: j, plotContains: ''})
        //     }
        // }
        // console.log(gardenArray)
         let gardenData = []
        let index = 0;
        this.gardenPlot = height.map(ind => {
            const gardenColumns = width.map(myInd => { 
                index++
                gardenData.push({cell: index})
                return <div className='cell' onClick={this.cellClick} id={index}>  {`my index is ${index}`}</div>
            })
            return <div className='rows'>{gardenColumns}</div>
        })
        console.log(gardenData)
       
        
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
                                value={this.state.gardenName} 
                                type='text' 
                                placeholder='My First Garden'
                                onChange={this.handleChange}>
                            </input>
                            {/* <input name = "gardenPlot" value = {gardenBox} style ={{display: "none"}} onChange = {this.handleChange}/>  */}
                    <button onClick={this.handleSubmit}>Save to My Gardens</button>
                    </fieldset>
                </form>

               <div id='gardenbox'> 
                   {/* <table className='gardenTable'>{this.gardenPlot}</table>  */}
                   {this.gardenPlot}
                </div>   
                
            </div>
        )
    }
    
    
}

export default withGardens(withPlants(Garden))