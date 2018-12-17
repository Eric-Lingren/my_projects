import React from 'react';
import {withPlants} from '../context/PlantProvider';
import axios from 'axios'

const PlantList = (props) => {
    //console.log(props)
    //console.log(props)
    const { currentPlants } = props

    // () => sendColor(plant.plotColor)

    const mappedPlants = currentPlants.map(plant => {
        return <option 
                    value={plant.plotColor} 
                    plotcolor={plant.plantType} 
                    key={plant._id} > 
                        {plant.plantType} - {plant.varitey } - {plant.plotColor}
                </option>
    })

    // handleDelete = (e) => {
    //     e.preventDefault()
    //     console.log(this.state)
    //     axios.post('/plants', this.state ).then(res => {
    //     })
    // }
    return(
        
        <div>
            <select name = "selectedPlotColor" onChange = {props.changePlotColor}>
                <optgroup label = "Add Plant to Garden">
                </optgroup>
                {mappedPlants}
            </select>
        </div>
    )
    
}

export default withPlants(PlantList)