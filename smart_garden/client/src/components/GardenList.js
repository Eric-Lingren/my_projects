import React from 'react';
import {withGardens} from '../context/GardenProvider';
import {withCompanion} from '../context/CompanionProvider';

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
        this.setState({gardenID: e.target.value}, () => {
        })
    }

    render(){
        // console.log(this.props.cellClick)
        const { currentGardens } = this.props
        const mappedGardens = currentGardens.map((garden, index) => {
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
        
            <div className='gardenListContainer'>
                <select className='gardenListDropdown' name = "selectedGarden" onChange = {this.handleChange}>
                    {mappedGardens}
                </select>
                <button className='searchButton' onClick = {() => this.props.getOneGarden(this.state.gardenID, this.props.cellClick)}> Load Garden </button>
                <button className='searchButton' onClick = {() => this.props.deleteGarden(this.state.gardenID)}> Delete Garden </button>
            </div>
        )    
    }
}

export default withCompanion(withGardens(GardenList))