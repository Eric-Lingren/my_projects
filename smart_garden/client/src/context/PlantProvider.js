import React, { Component } from 'react'
import axios from 'axios'

const PlantContext = React.createContext()

class PlantProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentPlants: [],
            selectedPlotColor: '',
            selectedPlantType: '',
            selectedPlantVaritey: '',
            selectedPlantID: '',
        }
    }

    changePlotColor = plant => {
       this.setState({
        selectedPlotColor: plant.plotColor,
        selectedPlantType: plant.plantType,
        selectedPlantVaritey: plant.plantVaritey,
        selectedPlantID: plant._id,
       })
    }

    getPlants = () => {
        axios.get('/plants').then(response => {
            //console.log(response.data)
            this.setState({
                currentPlants: response.data
            })
            
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    addPlant = newPlant => {
        axios.post('/plants', newPlant).then(response => {
            this.setState(prevState => ({
                currentPlants: [...prevState.currentPlants, response.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    deletePlant = () => {
        const plantID = this.state.selectedPlantID
        axios.delete(`/plants/${plantID}`).then(response => {

        }).catch(err => console.log(err.response.data.errMsg))
    }

    render(){
        // console.log('Selected PLOT COLOR is: ' + this.state.selectedPlotColor)
        // console.log('Selected PLANT TYPE is: ' + this.state.selectedPlantType)
        // console.log('Selected PLANT ID is: ' + this.state.selectedPlantID)
        return (
            <PlantContext.Provider 
                value={{
                    currentPlants: this.state.currentPlants,
                    getPlants:     this.getPlants,
                    addPlant:      this.addPlant,
                    deletePlant:    this.deletePlant,
                    changePlotColor: this.changePlotColor,
                    selectedPlotColor: this.state.selectedPlotColor,
                    selectedPlantType: this.state.selectedPlantType,
                    selectedPlantVaritey: this.state.selectedPlantVaritey,
                    selectedPlantID: this.state.selectedPlantID,
                }}>
                { this.props.children }
            </PlantContext.Provider>
        )
    }
}

export default PlantProvider


export const withPlants = C => props => (
    <PlantContext.Consumer>
        {value => <C {...props} {...value}/>}
    </PlantContext.Consumer>
)
