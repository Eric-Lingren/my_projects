import React, { Component } from 'react';
import '../css/gardenStyle.css'
import { withPlants } from '../context/PlantProvider'
import { withGardens } from '../context/GardenProvider'
import axios from 'axios'
import { withCompanion } from '../context/CompanionProvider'
import ImagePicker from './ImagePicker'
import AsparagusModal from './modals/AsparagusModal'
import BasilModal from './modals/BasilModal'
import BeanModal from './modals/BeanModal'
import BeetModal from './modals/BeetModal'
import BroccoliModal from './modals/BroccoliModal'
import CabbageModal from './modals/CabbageModal'
import CarrotModal from './modals/CarrotModal'
import CornModal from './modals/CornModal'
import CucumberModal from './modals/CucumberModal'
import EggplantModal from './modals/EggplantModal'
import LettuceModal from './modals/LettuceModal'
import OnionModal from './modals/OnionModal'
import PeaModal from './modals/PeaModal'
import PepperModal from './modals/PepperModal'
import PotatoModal from './modals/PotatoModal'
import PumpkinModal from './modals/PumpkinModal'
import RadishModal from './modals/RadishModal'
import SpinachModal from './modals/SpinachModal'
import SquashModal from './modals/SquashModal'
import TomatoModal from './modals/TomatoModal'
// import Plant from './Plant'

class Garden extends Component {
    constructor(props) {
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
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }, () =>  this.props.handleAddGardenDimensions(this.state.plotHeight, this.state.plotWidth))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.gardenData)
        console.log(this.gardenData)
        if (this.state.gardenName === '' || this.state.gardenYear === 0) {
            alert('You must give a name and a year before submitting')
        } else {
            const saveGarden = {
                gardenName: this.state.gardenName,
                plotHeight: this.state.plotHeight,
                plotWidth: this.state.plotWidth,
                gardenData: this.state.gardenData,
                gardenPlot: this.state.gardenPlot,
                gardenYear: this.state.gardenYear,
            }
            axios.post('/gardens', saveGarden).then(res => {
                this.props.getGardens()
            })
        }
    }

    createGarden = (e) => {
        e.preventDefault()
        this.props.handleAddGardenData(this.state.gardenData)
        const height = []
        const width = []

        for (let y = 1; y <= this.state.plotHeight; y++) {
            height.push(y)
        }
        for (let x = 1; x <= this.state.plotWidth; x++) {
            width.push(x)
        }

        this.gardenData = []
        let index = 0;
        this.gardenPlot = height.map(ind => {
            const gardenColumns = width.map(myInd => {
                index++
                this.gardenData.push({ cell: index, contents: '', imageUrl: null })
                return  <div className='cell' onClick={this.props.cellClick} id={index} key={index}>
                            {index}
                        </div>
            })
            return <div className='rows' key={index}>{gardenColumns}</div>
        })
        this.setState({
            gardenData: this.gardenData,
            gardenPlot: this.gardenPlot
        }, () =>  this.props.handleAddGardenData(this.state.gardenData, this.state.gardenPlot, this.gardenData) )
        this.props.clearLoadedGardenData()
    }

    loadedGardenColumns = () => {
        const width = this.props.selectedGardenPlotWidth;
        let loadedColumns = ''
        for (let i = 0; i < width; i++) {
            loadedColumns += '100px '
        }
        return loadedColumns
    }

    render() {
        return (
            <div className='gardenComponentWrapper'>
                <div className='createGardenWrapper'>
                    
                    
                    
                    <div className='formWrapper'>
                    <h4 className='titleHeading'> Create New Garden: </h4>
                    <form className='gardenGenerateForm' >
                       
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
                        Name:
                            <input
                            name='gardenName'
                            value={this.state.gardenName}
                            type='text'
                            placeholder='My First Garden'
                            onChange={this.handleChange}
                            required
                        />
                        Year:
                            <input
                            name='gardenYear'
                            className='gardenSizeInput'
                            value={this.state.gardenYear}
                            type='text'
                            placeholder='2018'
                            onChange={this.handleChange}
                            required
                        />  
                </form>
                <div className='gardenFormButtonContainer'>
                    <button className='createGardenButton' onClick={this.createGarden}>Create Garden</button>
                    <button onClick={this.handleSubmit}>Save to My Gardens</button>
                </div>
                </div>
                
                </div>
            
                <div className='gardenGridWrapper'>
            {
                this.props.loadedGardenData.length === 0 ?
                    <div id='gardenbox'>
                        {this.gardenPlot}
                    </div>
                :
                    <div id='gardenbox2' style={{ gridTemplateColumns: this.loadedGardenColumns() }}>
                        {this.props.loadedGardenData}
                    </div>
            }
            
            </div>
           
            {
                this.props.toggleImagePicker ? 
                <div>
                <ImagePicker />
                </div>
                :
                <div></div>
            }

               
            <AsparagusModal />
            <BasilModal />
            <BeanModal />
            <BeetModal />
            <BroccoliModal />
            <CabbageModal />
            <CarrotModal />
            <CornModal />
            <CucumberModal />
            <EggplantModal />
            <LettuceModal />
            <OnionModal />
            <PeaModal />
            <PepperModal />
            <PotatoModal />
            <PumpkinModal />
            <RadishModal />
            <SpinachModal />
            <SquashModal />
            <TomatoModal />

            </div>
        )
    }
}

export default withCompanion(withGardens(withPlants(Garden)))