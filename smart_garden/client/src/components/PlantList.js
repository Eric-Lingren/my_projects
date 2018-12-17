import React from 'react';
import {withPlants} from '../context/PlantProvider'

const PlantList = (props) => {
    //console.log(props)
    //console.log(props)
    const { currentPlants } = props

    // () => sendColor(plant.plotColor)

    const mappedPlants = currentPlants.map(plant => {
        return <option value={plant.plotColor} plotcolor={plant.plantType} key={plant.plantType}> {plant.plantType} - {plant.varitey } - {plant.plotColor}</option>
    })
   
    return(
        
        <div>
            Plant list component - to map through available plants in the database: <br></br>
            <select name = "plotColor" onChange = {props.changePlotColor}>
                <optgroup label = "Add Plant to Garden">
                </optgroup>
                {mappedPlants}
            </select>
        </div>
    )
    
}

export default withPlants(PlantList)