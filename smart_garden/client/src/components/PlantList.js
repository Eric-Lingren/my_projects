import React from 'react';
import {withPlants} from '../context/PlantProvider';
import '../css/plantListStyle.css'

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
                        plantvaritey={plant.plantVaritey}
                        > 
                            {plant.plantType}: {plant.varitey }
                    </option>
        })

        return(
        
            <div className='plantListContainer'>
                <h4 className='titleHeader'>Add Plant to Garden: </h4>
                <select className='plantSelector' name = "selectedPlotColor" onChange = {this.handleChange}>
                    <optgroup label = "Add Plant to Garden">
                    </optgroup>
                    {mappedPlants}
                </select>
                <button className='deleteButton' onClick={this.props.deletePlant}>Delete from List</button>
            </div>
        )    
    }
}

export default withPlants(PlantList)