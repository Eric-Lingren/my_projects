import React, {Component} from 'react'
import axios from 'axios'

class TrainRunningCountSpeedCount extends Component {
    constructor(){
        super()
        this.state = {
            randomDeck: 2,
            randomCount: 2,
            guess: 1,
            answer: 1,
            wereTheyRight: true
        }
    }

    clickNew = () => {
        console.log('guess is : ' + this.state.guess)
        // this.setState({
        //     wereTheyRight: true
        // })
        this.generateNumbers()
    }
    generateNumbers = () => {
        const decksLeftArray = [1,2,3,4,5,6,7,8];
        let randomDeck = decksLeftArray[Math.floor(Math.random()*decksLeftArray.length)]
        const countArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        let randomCount = countArray[Math.floor(Math.random()*countArray.length)]
        this.setState({
            randomDeck: randomDeck,
            randomCount: randomCount
        })
    }

    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value,  
        }) 
    }

    clickCheck = () => {
        console.log('check was clicked')
        const deck = this.state.randomDeck;
        const count = this.state.randomCount;
        const correctAnswer = (Math.round( count / deck));
        this.setState({
            answer: correctAnswer,
        }, () => this.checkAnswer() )
    }

    checkAnswer = () => {
        // console.log('check answer function ran')
        // console.log( 'guess is : ' + this.state.guess )
        // console.log( 'answer is : ' + this.state.answer )
        console.log( 'were they right state: ' + this.state.wereTheyRight )
        if (this.state.answer == this.state.guess){
            console.log('You were right!')
            this.setState({
                wereTheyRight: true,
            })
            return <h2>Correct!</h2>
        } else{
            console.log('You were wrong...')
            this.setState({
                wereTheyRight: false
            })
            return <h2> answered wrong</h2>
        }
    }
    

    render() {
        
        return ( 
            <div className='trainingWrapper'>
                <div className='container'>
                    <h1 className='trainDrillSubtitle'>Convert to True Count Drill</h1>
                    <h2 className='subTitle'>Running Count is: {this.state.randomCount} </h2>
                    <h2 className='subTitle'>Decks Left: {this.state.randomDeck}</h2>
                    <h2 className='subTitleMargin'>What's the true count? (round) </h2>
                    <form className='runningCountTrueCountForm'>
                        <input className='runCountTrueCountInput' type='number' name='guess' value={this.state.guess} onChange={this.handleChange} placeholder='Enter True Count' ></input><br></br>
                       
                    </form>
                    <button className='checkButton' onClick={this.clickNew}>New</button>
                    <button className='checkButton' onClick={this.clickCheck}>Check</button>
                    <h1 className={this.state.wereTheyRight ? 'showCountDiv' : 'hideCountDiv' }>Correct!</h1>
                    <h1 className={this.state.wereTheyRight ? 'hideCountDiv' : 'showCountDiv' }>The Answer Was: {this.state.answer}</h1>
                </div>
            </div>
        )
    }

}

export default TrainRunningCountSpeedCount