import React, {Component} from 'react'
import axios from 'axios'
let buttonList;
class TrainBasicStrategy extends Component {
    constructor(){
        super()
        this.state = {
            deckID: '',
            dealerHand: '',
            dealerImages: '',
            playerCard1: '',
            playerCard2: '',
            playerImage1: '',
            playerImage2: '',
            playerCard1IsAce : false,
            playerCard2IsAce : false,
            pCard1Number: '',
            pCard2Number: '',
            dHand: '',
            pHand: '',
            correctPlay: 'STAND',
            options: ['HIT', 'STAND', 'DOUBLE', 'SPLIT', 'SURRENDER'],
            playerGuess: '',
            buttonList: '',
            buttonClass: 'checkButton',
            bottomMargin: '18px'
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
    axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw/?count=3`).then(response => {
    const dealerCardValue = response.data.cards[0].value  
    const playerCardValue1 = response.data.cards[1].value  
    const playerCardValue2 = response.data.cards[2].value  
    const dealerCardImage = response.data.cards[0].image
    const playerCardImage1 = response.data.cards[1].image
    const playerCardImage2 = response.data.cards[2].image

    const hands = ['Hit', 'Stand', 'Double', 'Split', 'Surrender']
    const options = hands.map(hand => <button className='checkButton' onClick={this.checkButton} id='notSelected' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>)

      this.setState({
          dealerHand: dealerCardValue,
          dealerImages: dealerCardImage,
          playerCard1: playerCardValue1, 
          playerCard2: playerCardValue2,
          playerImage1: playerCardImage1, 
          playerImage2: playerCardImage2,
          buttonList: options
        }, () => this.showData() )
    })
  }

  showData = () => {
    
    const dCard = this.state.dealerHand;
    let dCardNumber = 0
    const pCard1 = this.state.playerCard1;
    let pCard1Number = 0
    const pCard2 = this.state.playerCard2;
    let pCard2Number = 0

    //  Sets the proper numberical values to dealer hand for future evaluation
    if (dCard === 'JACK' ||dCard === 'QUEEN' || dCard === 'KING' ){
        dCardNumber  = 10
        this.setState({
            dHand: dCardNumber
        })
    } else if (dCard === 'ACE') {
        dCardNumber  = 11
        this.setState({
            dhand: dCardNumber
        })
    } else {
        dCardNumber  = dCard
        this.setState({
            dhand: dCardNumber
        })
    }

    //  Sets the proper numberical values to player card 1 for future evaluation
    if (pCard1 === 'JACK' ||pCard1 === 'QUEEN' || pCard1 === 'KING' ){
        pCard1Number  = 10
    } else if (pCard1 === 'ACE' ) {
        pCard1Number  = 11
        this.setState({
            playerCard1IsAce: true,
        })
    } else {
        pCard1Number = pCard1 
    }

    //  Sets the proper numberical values to player card 2 for future evaluation
    if (pCard2 === 'JACK' ||pCard2 === 'QUEEN' || pCard2 === 'KING' ){
        pCard2Number  = 10
    } else if (pCard2 === 'ACE' ) {
        pCard2Number  = 11
        this.setState({
            playerCard2IsAce: true,
        })
    } else {
        pCard2Number = pCard2 
    }

    //  Sums the 2 player cards into 1 hand value
    const pHand = parseInt(pCard1Number) +  parseInt(pCard2Number)
    const dHand = dCardNumber

    //  Sets state of values parsed above for other functions to access.
    this.setState({
        pHand: pHand,
        dHand: dHand,
        pCard1Number: pCard1Number,
        pCard2Number: pCard2Number,
    }, () => this.whatCheckHandFunctionToRun() )
  }

  whatCheckHandFunctionToRun = () => {
    const pCard1Number = this.state.pCard1Number
    const pCard2Number = this.state.pCard2Number

    if (pCard1Number === pCard2Number ){
        //  run split check
        this.checkSplitHand()
    } else if (pCard1Number === 11 || pCard2Number === 11){
        //  Run soft hands check
        this.checkSoftHand()
    } else {
        //  Run hard hands check
        this.checkHardHand()
    }
  }


  checkHardHand = () => {
    console.log('check HARD hands function ran')
    const pHand = this.state.pHand;
    const dHand = this.state.dHand;

    if (pHand <= 8 ){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand >= 17) {
        console.log('the correct Play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    }else if (pHand === 9 && dHand === 2){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if(pHand <= 9 && dHand <= 6){
        console.log('the correct Play is DOUBLE')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if(pHand === 9 && dHand <= 11){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if(pHand === 10 && dHand <= 9){
        console.log('the correct Play is DOUBLE')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if (pHand === 10 && dHand <= 11){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 11 && dHand <= 10){
        console.log('the correct Play is DOUBLE')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if (pHand === 11 && dHand === 11){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 12 && dHand <= 3){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 12 && dHand <= 6){
        console.log('the correct Play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if(pHand === 12 && dHand <= 11){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 13 && dHand <= 6){
        console.log('the correct Play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if (pHand === 13 && dHand <= 11){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 14 && dHand <= 6){
        console.log('the correct Play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if (pHand === 14 && dHand <= 11){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 15 && dHand <= 6){
        console.log('the correct Play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if (pHand === 15 && dHand <= 9){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 15 && dHand === 10){
        console.log('the correct Play is SURRENDER (else hit)')
        this.setState({
            correctPlay: 'SURRENDER',
        })
    } else if (pHand === 15 && dHand === 11){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 16 && dHand <= 6){
        console.log('the correct Play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if (pHand === 16 && dHand <= 8){
        console.log('the correct Play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    }  else if (pHand === 16 && dHand <= 11){
        console.log('the correct Play is SURRENDER (else hit)')
        this.setState({
            correctPlay: 'SURRENDER',
        })
    }
  }

  checkSoftHand = () => {
    console.log('check Soft hands function ran')
    const pHand = this.state.pHand;
    const dHand = this.state.dHand;

    if (pHand >= 19){
        console.log('the correct play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if(pHand === 13 && dHand <= 4){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 13 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if(pHand === 13 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if(pHand === 14 && dHand <= 4){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 14 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if(pHand === 14 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if(pHand === 15 && dHand <= 3){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 15 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if(pHand === 15 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    }  else if(pHand === 16 && dHand <= 3){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 16 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if(pHand === 16 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if(pHand === 17 && dHand === 2){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 17 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Hit.')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if(pHand === 17 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if(pHand === 18 && dHand === 2){
        console.log('the correct play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if (pHand === 18 && dHand <= 6){
        console.log('the correct play is DOUBLE.  Else Stand.')
        this.setState({
            correctPlay: 'DOUBLE',
        })
    } else if(pHand === 18 && dHand <= 8){
        console.log('the correct play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if(pHand === 18 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    }
  }


  checkSplitHand = () => {
    console.log('check SPLIT hands function ran')
    const pHand = this.state.pHand;
    const dHand = this.state.dHand;

    if(pHand === 22){
        console.log('the correct play is SPLIT')
        this.setState({
            correctPlay: 'SPLIT',
        })
    } else if (pHand === 20){
        console.log('the correct play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    } else if (pHand === 16){
        console.log('the correct play is SPLIT')
        this.setState({
            correctPlay: 'SPLIT',
        })
    } else if((pHand === 4 || pHand === 6) && dHand <= 7){
        console.log('the correct play is SPLIT')
        this.setState({
            correctPlay: 'SPLIT',
        })
    } else if((pHand === 4 || pHand === 6) && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if(pHand === 8 && dHand <= 4){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 8 && dHand <= 6){
        console.log('the correct play is SPLIT')
        this.setState({
            correctPlay: 'SPLIT',
        })
    } else if (pHand === 8 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 12 && dHand <= 6){
        console.log('the correct play is SPLIT')
        this.setState({
            correctPlay: 'SPLIT',
        })
    } else if (pHand === 12 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 14 && dHand <= 7){
        console.log('the correct play is SPLIT')
        this.setState({
            correctPlay: 'SPLIT',
        })
    } else if (pHand === 14 && dHand <= 11){
        console.log('the correct play is HIT')
        this.setState({
            correctPlay: 'HIT',
        })
    } else if (pHand === 18 & (dHand === 7 || dHand === 10 || dHand === 11 ) ){
        console.log('the correct play is STAND')
        this.setState({
            correctPlay: 'STAND',
        })
    }  else if (pHand === 18 && dHand <= 9 ){
        console.log('the correct play is SPLIT')
        this.setState({
            correctPlay: 'SPLIT',
        })
    }

}

checkButton = (e) => {
    // console.log(e.target.value)
    //console.log('a check button was clicked')
    const answer = this.state.correctPlay
    const guess = e.target.value
    const hands = ['Hit', 'Stand', 'Double', 'Split', 'Surrender']
    const butts = hands.map(hand => {
        if(guess === answer && hand.toUpperCase() === answer){
            return (
                <button className='checkButton' onClick={this.checkButton} id='correct' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
            )
        }else if (hand.toUpperCase() === answer){
            return (
                <button className='checkButton' onClick={this.checkButton} id='correct' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
            )
        }else if(guess === hand.toUpperCase()) {
            return (
                <button className='checkButton' onClick={this.checkButton} id='wrong' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
            )
        }else {
            return (
                <button className='checkButton' onClick={this.checkButton} id='notSelected' name={hand.toUpperCase()} value={hand.toUpperCase()} >{hand}</button>
            )
        }
    })

    this.setState({buttonList: butts, buttonClass: 'checkButtonOff', bottomMargin: '0px'})
}


    render() {
        return ( 
            <div className='trainingWrapper'>
                <div className='basicStrategyWrapper'>
                <h1 className='trainDrillSubtitle'>Basic Strategy Drill</h1>
                <h3 className='handDescription'>Dealer Hand</h3>
                    <div className='dealerHandBS'>
                        
                       <img className='cardBS' src={this.state.dealerImages}></img>

                    </div>
                    <div className='playerHandBS'>
                    
                      <img  className='cardBS' src={this.state.playerImage1}></img>
                      <img  className='cardBS' src={this.state.playerImage2}></img>
                    </div>
                    <h3 className='handDescription'>Player Hand</h3>
                    <div className='basicStrategyButtonWrapper'>
                        <h2 style={{marginBottom: this.state.bottomMargin}}>Choose the correct play:</h2>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonHit' name='HIT' value='HIT' >Hit</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonStand' name='STAND' value='STAND' >Stand</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonDouble' name='DOUBLE' value='DOUBLE' >Double</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonSplit' name='SPLIT' value='SPLIT' >Split</button>
                        <button className={this.state.buttonClass} onClick={this.checkButton} id='buttonSurrender' name='SURRENDER' value='SURRENDER' >Surrender</button> <br></br>
                        {this.state.buttonList}
                        <button className='dealBSButton' onClick={this.dealCard}>Deal</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default TrainBasicStrategy