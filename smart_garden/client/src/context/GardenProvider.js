import React, { Component } from 'react';
import axios from 'axios';

const GardenContext = React.createContext()

class GardenProvider extends Component {
    constructor(){
        super()
        this.state = {
            currentGardens: [],
            selectedGarden: '',
            selectedGardenData: '',
            selectedGardenPlotHeight: '',
            selectedGardenPlotWidth: '',
            loadedGardenData: [],
            isToggled: false,
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

    getOneGarden = (id, callback) => {
        axios.get(`/gardens/${id}`).then(response => {
            this.setState({
                selectedGardenData: response.data.gardenData,
                selectedGardenPlotHeight: response.data.plotHeight,
                selectedGardenPlotWidth: response.data.plotWidth,
            }, () => this.loadSavedGarden(callback))
        }).catch(err => console.log(err.response.data.errMsg))
    }

    loadSavedGarden = (callback) => {
        console.log(this.state.selectedGardenData)
        this.setState(prevState => {
            return {
                loadedGardenData: prevState.selectedGardenData.map(plot => {
                    // const rgbColor = plot.backgroundColor
                    console.log(plot.imageUrl)
                    const image = plot.imageUrl
                    return (
                        <div className='cellLoaded' 
                             id={plot.cell} 
                             style={{ backgroundImage: image }} 
                             onClick={callback} > 
                                {plot.contents} 
                        </div>
                    )
                })
            }
        })
    }

    
    clearLoadedGardenData = () => {
        this.setState({
            loadedGardenData: []
        })
    }

    deleteGarden = (id) => {
        axios.delete(`/gardens/${id}`).then(response => {
            this.getGardens()
            this.clearLoadedGardenData()
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
                    selectedGardenData: this.state.selectedGardenData,
                    selectedGardenPlotHeight: this.state.selectedGardenPlotHeight,
                    selectedGardenPlotWidth: this.state.selectedGardenPlotWidth,
                    loadedGardenData: this.state.loadedGardenData,
                    clearLoadedGardenData: this.clearLoadedGardenData
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



