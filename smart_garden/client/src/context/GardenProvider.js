import React, { Component } from 'react'
import axios from 'axios'

const GardenContext = React.createContext()

class GardenProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentGardens: [],
            selectedGarden: '',
            selectedGardenPlot: '',
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

    addGarden = newGarden => {
        axios.post('/gardens', newGarden).then(response => {
            this.setState(prevState => ({
                currentGardens: [...prevState.currentGardens, response.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    getOneGarden = (id) => {
        console.log('get one garden function ran')
        axios.get(`/gardens/${id}`).then(response => {
            this.setState({
                selectedGardenPlot: response.data.gardenPlot
            }, () => console.log(this.state.selectedGardenPlot))
        }).catch(err => console.log(err.response.data.errMsg))
    }

    
    deleteGarden = (id) => {
        axios.delete(`/gardens/${id}`).then(response => {

        }).catch(err => console.log(err.response.data.errMsg))
    }

    render(){
        return (
            <GardenContext.Provider 
                value={{
                    currentGardens: this.state.currentGardens,
                    getGardens:     this.getGardens,  
                    addGarden:      this.addGarden,
                    changeSelectedGarden: this.changeSelectedGarden,
                    getOneGarden: this.getOneGarden,
                    deleteGarden: this.deleteGarden,
                    selectedGardenPlot: this.state.selectedGardenPlot
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
