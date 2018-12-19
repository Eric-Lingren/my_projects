import React from 'react';
import {withGardens} from '../context/GardenProvider';
import axios from 'axios'


class GardenList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gardenID: {}
        }
    }

    componentDidMount(){
        this.props.getGardens()
    }
    
    handleChange = e => {
        // console.log(this.state)
        // console.log(e.target.value)
        this.setState({gardenID: e.target.value}, () => {
            
        })
    }


    render(){
        const { currentGardens } = this.props
        //console.log(this.props.currentGardens)
    
        const mappedGardens = currentGardens.map((garden, index) => {
            // console.log(garden._id)
            return <option 
                        onChange={this.handleChange}
                        value={garden._id} 
                        gardenname={garden.gardenName} 
                        key={garden._id} 
                        > 
                        {garden.gardenName} - {garden.gardenYear}
                    </option>
        })

        return(
        
            <div>
                <select name = "selectedGarden" onChange = {this.handleChange}>
                    {mappedGardens}
                </select>
                <button className='searchButton' onClick = {() => this.props.getOneGarden(this.state.gardenID)}> Get Garden </button>
                <button className='searchButton' onClick = {() => this.props.deleteGarden(this.state.gardenID)}> Delete Garden </button>
            </div>
        )    
    }
}

export default withGardens(GardenList)