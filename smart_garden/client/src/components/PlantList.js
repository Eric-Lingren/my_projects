import React from 'react';
import {withPlants} from '../context/PlantProvider';


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
                        plantVaritey={plant.plantVaritey}
                        > 
                            {plant.plantType}: {plant.varitey }
                    </option>
        })

        return(
        
            <div>
                <select name = "selectedPlotColor" onChange = {this.handleChange}>
                    <optgroup label = "Add Plant to Garden">
                    </optgroup>
                    {mappedPlants}
                </select>
                <button onClick={this.props.deletePlant}>Delete Plant</button>
            </div>
        )    
    }
}

export default withPlants(PlantList)