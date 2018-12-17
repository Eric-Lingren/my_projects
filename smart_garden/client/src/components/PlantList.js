import React from 'react';

const PlantList = (props) => {
    //console.log(props)
    const { currentPlants } = props
    // console.log(plantType)
    //console.log(varitey)
    //console.log(currentPlants)

    const sendColor = color => {
        props.changePlotColor(color)
        console.log('running')
    }

    const changeTest = () => {
        console.log('change test ran')
    }
    // () => sendColor(plant.plotColor)

    const mappedPlants = currentPlants.map(plant => {
        return <option value={plant.plantType} plotcolor={plant.plotColor} onChange={console.log('you changed bro')} key={plant.plantType}> {plant.plantType} - {plant.varitey } </option>
    })
   
    return(
        
        <div>
            Plant list component - to map through available plants in the database: <br></br>
            <select onChange={changeTest()}>
                <optgroup label = "Add Plant to Garden">
                {mappedPlants}
                </optgroup>
            </select>
        </div>
    )
    
}

export default PlantList