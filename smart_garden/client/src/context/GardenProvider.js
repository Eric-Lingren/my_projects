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
            console.log(response.data)
            this.setState({
                selectedGardenData: response.data.gardenData,
                selectedGardenPlotHeight: response.data.plotHeight,
                selectedGardenPlotWidth: response.data.plotWidth,
            })
        }).catch(err => console.log(err.response.data.errMsg))
    }
    // loadSavedGarden = () => {
    //     const height = this.state.selectedGardenPlotHeight
    //     const width = this.props.selectedGardenPlotWidth
    //     console.log(height)
    //     console.log(width)
    //     // this.gardenPlot = height.map(ind => {
    //     //     for (let y = 0; y< height; y++) {
    //     //         for (let x = 0; x < width; x++){

    //     //         return <div className='cell' onClick={this.cellClick} > 1 </div>
    //     //     }
    //     //     return <div className='rows'></div>
    //     // }
    //     // })

    //     this.testDiv = this.props.selectedGardenData.map(plot => {
    //         return (
    //             <div className='cell' id={plot.cell}> {plot.contents} </div>
    //         )
    //     })
    // }
    
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
                    selectedGardenData: this.state.selectedGardenData,
                    selectedGardenPlotHeight: this.state.selectedGardenPlotHeight,
                    selectedGardenPlotWidth: this.state.selectedGardenPlotWidth,
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







