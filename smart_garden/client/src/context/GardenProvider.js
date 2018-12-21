import React, { Component } from 'react'
import axios from 'axios'

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

    getOneGarden = (id) => {
        axios.get(`/gardens/${id}`).then(response => {
            this.setState({
                selectedGardenData: response.data.gardenData,
                selectedGardenPlotHeight: response.data.plotHeight,
                selectedGardenPlotWidth: response.data.plotWidth,
            }, () => this.loadSavedGarden())
        }).catch(err => console.log(err.response.data.errMsg))
    }

        //  , () => this.loadSavedGarden()

    loadSavedGarden = () => {
        this.setState(prevState => {
            return {
                loadedGardenData: prevState.selectedGardenData.map(plot => {
                    const rgbColor = plot.backgroundColor
                    return (
                        <div    className='cell' 
                                id={plot.cell} 
                                style={{ backgroundColor: rgbColor }} 
                                onClick={this.props.cellClick} > 
                                    {plot.contents} 
                        </div>
                    )
                })
            }
        })
        // this.loadedGardenData = this.state
        // console.log('loaded Garden Data ' + this.state.loadedGardenData)
    }
    
    deleteGarden = (id) => {
        axios.delete(`/gardens/${id}`).then(response => {
            this.getGardens()
        }).catch(err => console.log(err.response.data.errMsg))
    }

    toggleModals = () => {
        this.setState({
            isToggled: true
        })
        if(this.state.isToggled){
            // Show Companion Plants Modal
        } else {
            // Hide companion Plants modal
        }
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
                    loadedGardenData: this.state.loadedGardenData
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



