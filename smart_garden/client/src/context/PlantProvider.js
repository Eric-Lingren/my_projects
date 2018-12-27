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
            toggleImagePicker: false,
            selectedPlantUrl: '',
        }
    }

    changePlotColor = plant => {
       this.setState({
        selectedPlotColor: plant.plotColor,
        selectedPlantType: plant.plantType,
        selectedPlantVaritey: plant.plantVaritey,
        selectedPlantID: plant._id,
        selectedPlantUrl: plant.imageUrl,
       })
    }

    getPlants = () => {
        axios.get('/plants').then(response => {
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
            this.getPlants()
        }).catch(err => console.log(err.response.data.errMsg))
    }

    setImageToggle = e => {
        if (this.state.toggleImagePicker){
            this.setState({
                toggleImagePicker: false,
            })
        } else {
            this.setState({
                toggleImagePicker: true,
            })
        }
    }

    setPlantUrl = url => {
        this.setState({selectedPlantUrl: url.src})
    }
    
    render(){
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
                    toggleImagePicker: this.state.toggleImagePicker,
                    setImageToggle: this.setImageToggle,
                    setPlantUrl: this.setPlantUrl,
                    selectedPlantUrl: this.state.selectedPlantUrl,
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
