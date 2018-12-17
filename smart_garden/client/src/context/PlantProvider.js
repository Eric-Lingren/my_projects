import React, { Component } from 'react'
import axios from 'axios'

const PlantContext = React.createContext()

class PlantProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentPlants: [],
            plotColor: '',
            plantType: ''
        }
    }

    changePlotColor = e => {
        const {name , value} = e.target
        this.setState({[name]: value})
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

    render(){
        console.log(this.state.plotColor)
        //console.log(this.state.plantType)
        return (
            <PlantContext.Provider 
                value={{
                    currentPlants: this.state.currentPlants,
                    getPlants:     this.getPlants,
                    addPlant:      this.addPlant,
                    changePlotColor: this.changePlotColor,
                    plotColor: this.state.plotColor,
                    plantType: this.state.plantType,
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


