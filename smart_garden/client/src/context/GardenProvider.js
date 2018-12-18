import React, { Component } from 'react'
import axios from 'axios'

const GardenContext = React.createContext()

class GardenProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentGardens: [],
        }
    }

    getGardens = () => {
        axios.get('/gardens').then(response => {
            this.setState({
                currentGardens: response.data
            })
            
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    // addGarden = newPlant => {
    //     axios.post('/plants', newPlant).then(response => {
    //         this.setState(prevState => ({
    //             currentPlants: [...prevState.currentPlants, response.data]
    //         }))
    //     })
    //     .catch(err => console.log(err.response.data.errMsg))
    // }

    // deleteGarden = () => {
    //     const plantID = this.state.selectedPlantID
    //     console.log(plantID)
    //     axios.delete(`/plants/${plantID}`).then(response => {

    //     }).catch(err => console.log(err.response.data.errMsg))
    // }

    render(){
        return (
            <GardenContext.Provider 
                value={{
                    currentGardens: this.state.currentGardens,
                    getGardens:     this.getGardens,  
                }}>
                { this.props.children }
            </GardenContext.Provider>
        )
    }
}

export default GardenProvider

export const withGardens = C => props => (
    <GardenContext.Consumer>
        {value => <C {...props} {...value}/>}
    </GardenContext.Consumer>
)
