import React, {Component} from 'react'
import './css/train.css'
import {Link} from 'react-router-dom'

class Train extends Component {
    constructor(){
        super()
        this.state = {   
        }
    }

    render() {
        return (
            <div className='trainingWrapper'>
            
                <div className='trainLinksContainer'>
                    <h1 className='trainingDrillsHeader'>Training Drills:</h1>
                    <Link className='trainLinks' to="/TrainBasicStrategy">Basic Strategy</Link>
                    <Link className='trainLinks' to="/TrainSelfPacedCount">Self Paced Count</Link>
                    <Link className='trainLinks' to="/TrainSpeedCount">Speed Count</Link>
                    <Link className='trainLinks' to="/TrainRunningCountTrueCount">True Count</Link>
                    <Link className='trainLinks' to="/TrainBetSizing">Bet Sizing</Link>
                </div>
            </div>
        )
    }
}

export default Train