import React, { Component } from 'react';
import '../css/gardenStyle.css'
import {withPlants} from '../context/PlantProvider'
import {withGardens} from '../context/GardenProvider'
import axios from 'axios'


class Garden extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            gardenName: '',
            plotHeight: 0,
            plotWidth: 0,   
            gardenData: [],
            gardenPlot: [],
            gardenYear: ''
        }
        this.gardenPlot = ''
        this.gardenData = []
        this.testDiv = []

    }
    handleChange = (e) => {
        //console.log(this.props.selectedGardenPlot)
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.gardenName === '' || this.state.gardenYear === 0 ){
            alert('You must give a name and a year before submitting')
        } else {
            // console.log('Name: ' + this.state.gardenName)
            // console.log('Rows: ' + this.state.plotHeight)
            // console.log('Columns: ' + this.state.plotWidth)
            // console.log(this.state.gardenData)
            // this.setState({gardenData: this.gardenData, gardenPlot: this.gardenPlot})
            const saveGarden = {
                gardenName: this.state.gardenName,
                plotHeight: this.state.plotHeight,
                plotWidth: this.state.plotWidth,
                gardenData: this.state.gardenData,
                gardenPlot: this.state.gardenPlot,
                gardenYear: this.state.gardenYear,
            }
            console.log(saveGarden)
            axios.post('/gardens', saveGarden ).then(res => {
            })
        }

        
        
        
    }

    createGarden = (e) => {
        e.preventDefault()
        const height = []
        const width = []

        for(let y = 1; y <= this.state.plotHeight; y++){
            height.push(y)
        }
        for(let x = 1; x <= this.state.plotWidth; x++){
            width.push(x)
         }

        this.gardenData = []
        let index = -1;
        this.gardenPlot = height.map(ind => {
            const gardenColumns = width.map(myInd => { 
                index++
                this.gardenData.push({cell:index, contents: '', backgroundColor: 0})
                return <div className='cell' onClick={this.cellClick} id={index}> {index} </div>
            })
            return <div className='rows'>{gardenColumns}</div>
        })
        // console.log(this.gardenPlot)
        this.setState({gardenData: this.gardenData, gardenPlot: this.gardenPlot})
    }

    loadSavedGarden = () => {
        this.testDiv = this.props.selectedGardenData.map(plot => {
            const rgbColor = plot.backgroundColor
            
            return (
                <div className='cell' id={plot.cell} style={{ backgroundColor: rgbColor }} onClick={this.cellClick}> {plot.contents} </div>
            )
        })
    }

    loadedGardenColumns = () => {
        const width = this.props.selectedGardenPlotWidth; 
        let loadedColumns = ''
        for (let i = 0; i < width; i++){
            loadedColumns += '75px '
        }
        console.log(loadedColumns)
        return loadedColumns
    }
    
    cellClick = (e) => {

        e.target.style.backgroundColor = this.props.selectedPlotColor
        e.target.textContent=`${this.props.selectedPlantType}`
        
        const clickedCell = e.target.id
        const cellData = e.target.innerHTML
        const cellColor = e.target.style.backgroundColor

        for (let i = 0; i < this.state.gardenData.length; i++){
            if(this.state.gardenData[i].cell === Number(clickedCell)){
                this.gardenData[i].contents = cellData
                this.gardenData[i].backgroundColor = cellColor
                let newPlot = this.gardenData[i]
                this.setState(prevState => {
                    return {
                        gardenData: prevState.gardenData.map(garden => Number(clickedCell) === garden.cell ? newPlot : garden)
                    }
                })
            }
        }
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
                                onChange={this.handleChange}  
                                />
                    Width:  <input 
                                name='plotWidth' 
                                type='number' 
                                className='gardenSizeInput'
                                placeholder='20' 
                                value={this.state.plotWidth} 
                                onChange={this.handleChange}
                                />
                    Garden Name: 
                            <input
                                name='gardenName'
                                value={this.state.gardenName} 
                                type='text' 
                                placeholder='My First Garden'
                                onChange={this.handleChange}
                                required
                                />
                    Garden Year: 
                            <input
                                name='gardenYear'
                                value={this.state.gardenYear} 
                                type='text' 
                                placeholder='2018'
                                onChange={this.handleChange}
                                required
                                />
                            
                    <button onClick={this.createGarden}>Create Garden</button>
                    <button onClick={this.handleSubmit}>Save to My Gardens</button>
                    </fieldset>
                </form>
            <button onClick={this.loadSavedGarden}>Test</button>

               <div id='gardenbox'> 
                   {this.gardenPlot} 
                </div>   

                <div id='gardenbox2' style={{ gridTemplateColumns: this.loadedGardenColumns() }}>
                    {this.testDiv}
                </div>
                
            </div>
        )
    }
     
    // style={{ gridTemplateColumns: '75px 75px 75px' }}
    
}

export default withGardens(withPlants(Garden))