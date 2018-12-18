import React from 'react';
import {withGardens} from '../context/GardenProvider';


class GardenList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            garden: {}
        }
    }

    componentDidMount(){
        this.props.getGardens()
    }
    
    render(){
        const { currentGardens } = this.props
        //console.log(this.props.currentGardens)
    
        const mappedGardens = currentGardens.map((garden, index) => {
            return <option 
                        value={index} 
                        gardenname={garden.gardenName} 
                        key={index} 
                        > 
                        {garden.gardenName} 
                    </option>
        })

        return(
        
            <div>
                <select name = "selectedGarden" onChange = {this.handleChange}>
                    {mappedGardens}
                </select>
                
            </div>
        )    
    }
}

export default withGardens(GardenList)