import React, {Component} from 'react'
import axios from 'axios'

class TrainSelfPacedCount extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            cardsDealt: [],
            cardsDealtImages: 'none',
            cardsDealtValues: [],
            currentCardValue: 0,
            count: 0,
            runningCountVisible: false
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

  hideShowRunningCount = () => {
    if (this.state.runningCountVisible){
        this.setState({
            runningCountVisible: false
        });
        
    } else {
        this.setState({
            runningCountVisible: true
        })
    }
  }

  hideShowCountDiv = () => {
      if (this.state.runningCountVisible) {
          return <span>Show Running Count</span>
      } else {
          return <span>Hide Running Count</span>
      }
  }
  
  
    render() {
       
        return ( 
            <div className='trainingWrapper'>
                <div className='container'>
                    <h1 className='trainDrillSubtitle'>Self Paced Count Drill</h1>
                    <div className='deckDisplay'>
                        <img src={this.state.cardsDealtImages} alt='Cards Displayed Here'></img>
                    </div>
                    <button className='checkButton' onClick={this.dealCard}>Deal Card</button>
                    <h2 onClick={this.hideShowRunningCount} className='toggleCount'>{this.hideShowCountDiv()} </h2>
                    <h2 className={this.state.runningCountVisible ? 'hideCountDiv' : 'showCountDiv' }> The Running Count is: {this.state.count} </h2>
                    
                </div>
            </div>
        )
    }
}

export default TrainSelfPacedCount