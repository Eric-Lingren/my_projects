import React, { Component } from 'react'
import axios from 'axios'

const PlantContext = React.createContext()



class PlantProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentPlants: []
        }
    }

    getPlants = () => {
        axios.get('/plants').then(response => {
            console.log(response.data)
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
        
        return (
            
            <PlantContext.Provider 
                value={{
                    currentPlants: this.state.currentPlants,
                    getPlants:     this.getPlants,
                    addPlant:      this.addPlant
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


