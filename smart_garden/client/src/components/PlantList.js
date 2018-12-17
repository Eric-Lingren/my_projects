import React from 'react';

const PlantList = (props) => {
    console.log(props)
    const { plantType, varitey } = props
    // console.log(plantType)
    // console.log(varitey)
    
    return(
        
        <div>
            Plant list component - to map through available plants in the database: <br></br>
            <select>
                <optgroup label = "Add Plant to Garden">
                <option value="plant1">plant 1</option>
                <option value="plant2">plant 2</option>
                <option value="plant3">plant 3</option>
                <option value="plant4">plant 4</option>
                </optgroup>
            </select>
        </div>
    )
    
}

export default PlantList