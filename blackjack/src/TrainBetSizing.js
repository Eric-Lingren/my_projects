import React, {Component} from 'react'
import axios from 'axios'


class TrainBetSizing extends Component {
    constructor(){
        super()
        this.state = {
            randomCount: 0,
            output: 'How Smart Are You???',
        }
    }

    generateRandomCount = () => {
        const betCountArray = [0,1,2,3,4,]
        let randomCount = betCountArray[Math.floor(Math.random()*betCountArray.length)]
        this.setState({
            randomCount: randomCount,
        })
    }

    checkAnswer = event => {
        console.log('button Value ' + event.target.value)
        console.log('current state ' + this.state.randomCount)
        let answer = event.target.value;
        let count = this.state.randomCount
        if (answer == 1 && count == 0 ){
            console.log('correct!')
            this.displayOutputCorrect()
            
        } else if (answer == 2 && count == 1 ){
            console.log('correct!')
            this.displayOutputCorrect()
        } else if (answer == 4 && count == 2 ){
            console.log('correct!')
            this.displayOutputCorrect()
        } else if (answer == 8 && count == 3 ){
            console.log('correct!')
            this.displayOutputCorrect()
        } else if (answer == 16 && count == 4 ){
            console.log('correct!')
            this.displayOutputCorrect()
        } else{
            console.log('NOPE!')
            this.displayOutputIncorrect()
        }
        
        this.generateRandomCount()
    }

    displayOutputCorrect = () => {
        this.setState({
            output: 'Correct!'
        })
    }

    displayOutputIncorrect = () => {
        this.setState({
            output: 'Try Again... :( '
        })
    }

    render() {

        return ( 
            <div className='trainingWrapper'>
                <div className='container'>
                    <h1 className='trainDrillSubtitle'>Proper Bet Sizing Drill</h1>
                    <h2 className='subTitle'>Your minumum bet size is 1 unit.</h2>
                    <h2 className='subTitleMargin'>Select the correct betting unit size based on the true count:</h2>
                    <h2 className='subTitle'>True count is: {this.state.randomCount} </h2>
                    <h2 className='subTitleMargin'>Your bet should be: </h2>
                    <div className = 'betButtonContainer'>
                        <button onClick={this.checkAnswer} value='1' className='checkButton'>1x</button>
                        <button onClick={this.checkAnswer} value='2' className='checkButton'>2x</button>
                        <button onClick={this.checkAnswer} value='4' className='checkButton'>4x</button>
                        <button onClick={this.checkAnswer} value='8' className='checkButton'>8x</button> <br></br>
                        <button onClick={this.checkAnswer} value='16' className='checkButtonBig'>2 hands of 8x</button>
                    </div>
                    <h2> {this.state.output} </h2>
                </div>
            </div>
        )
    }
}

export default TrainBetSizing