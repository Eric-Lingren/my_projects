import React from 'react';
import {withPlants} from '../context/PlantProvider';
import axios from 'axios'

class PlantList extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            plant: {}
        }
    }

    handleChange = e => {
        this.setState({plant: this.props.currentPlants[e.target.value]}, () => {
            this.props.changePlotColor(this.state.plant)
        })
    }
    
    render(){
        const { currentPlants } = this.props

    
        const mappedPlants = currentPlants.map((plant, index) => {
            return <option 
                        value={index} 
                        plotcolor={plant.plantType} 
                        key={index} 
                        > 
                            {plant.plantType} - {plant.varitey } - {plant.plotColor}
                    </option>
        })

        return(
        
            <div>
                <select name = "selectedPlotColor" onChange = {this.handleChange}>
                    <optgroup label = "Add Plant to Garden">
                    </optgroup>
                    {mappedPlants}
                </select>
            </div>
        )    
    }
}

export default withPlants(PlantList)