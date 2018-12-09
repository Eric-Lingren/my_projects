import React, {Component} from 'react'
import axios from 'axios'

class TrainSpeedCount extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            cardsDealt: [],
            cardsDealtImages: 'none',
            cardsDealtValues: [],
            currentCardValue: 0,
            count: 0,
            runningCountVisible: false,
            cardsPerSecond: 1,
            howFast: 1000,
        }
    }

    componentDidMount(){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=8').then(response => {
          const deckID = response.data.deck_id;
          this.setState({
            deckID: deckID,
          })
        })
      }

    dealCard = () => {
        const speed = this.state.howFast
        const timerId = setInterval(()=>{
        axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=1`).then(response => {
          const oneCardDealt = response.data.cards[0].code;
          const cardImage = response.data.cards[0].image
          const cardValue = response.data.cards[0].value
          this.setState(prevState => {
            return {
              cardsDealt: [...prevState.cardsDealt, oneCardDealt],
              cardsDealtImages: cardImage,
              cardsDealtValues: [...prevState.cardsDealtValues, cardValue],
              currentCardValue: cardValue,
            }
            //  Once state is set from the new card, re-run the player hand total functions
          }, () => this.whatsTheCount() )
        })
        },speed)

    setTimeout( ()=> { 
        clearInterval(timerId)
        this.countIsFinished()
    }, 10000)  
    }
    
      whatsTheCount = () => {
        //  if card value is 10 or greater, count is subtracted by 1
       
        if (this.state.currentCardValue === '10' || this.state.currentCardValue === 'JACK' || this.state.currentCardValue === 'QUEEN' || this.state.currentCardValue === 'KING' || this.state.currentCardValue === 'ACE'){
            this.setState(prevState => {
                return{
                    count: prevState.count -1
                }
            })
            //  if card value is 6 or less, count is added by 1
        } else if(this.state.currentCardValue < 7){
            this.setState(prevState => {
                return{
                    count: prevState.count +1
                }
            })
        }
      }

      countIsFinished = () => {
          setTimeout ( () => {
            this.setState({
                runningCountVisible: true
            }) 
          }, 1500)
        
      }
    
    handleChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value,
            runningCountVisible: false
           
        }, () => {
            this.setState({
                howFast: (1000 / this.state.cardsPerSecond),
            })
            
        }, () => console.log(this.state.cardsPerSecond) ) 
       
    }
      
    render() {

        return ( 
            <div className='trainingWrapper'>
                <div className='container'>
                    <h1 className='trainDrillSubtitle'>Speed Count Drill</h1>
                    <form className='speedCountForm'>
                        <span className='cardsPerSecondSpan'>Cards Per Second:</span> <input className='cardsPerSecondInput' name='cardsPerSecond' type='number' value={this.state.cardsPerSecond} placeholder='Cards Per Second' onChange={this.handleChange}></input>
                    </form>
                    <div className='deckDisplay'>
                        <img src={this.state.cardsDealtImages} alt='Cards Displayed Here'></img>
                    </div>
                    <button className='checkButton' onClick={this.dealCard}>Start</button>
                    <h2 className={this.state.runningCountVisible ? 'showCountDiv' : 'hideCountDiv' }>The count is: {this.state.count}</h2>
                </div>
            </div>
        )
    }
}

export default TrainSpeedCount