import React from 'react'
import './css/play.css'
import DisplayACard from './DisplayACard'
import SplitHand from './SplitHand'
import oneDollar from './css/images/$1.png';
import fiveDollar from './css/images/$5.png';
import twentyFiveDollar from './css/images/$25.png';
import fiftyDollar from './css/images/$50.png';
import hundredDollar from './css/images/$100.png';
import fiveHundredDollar from './css/images/$500.png';
import cardBack from './css/images/cardBack.png'


const Play = (props) => {
const { dealHand, dealOneCard, dealerHandImages, playerHandImages, playerHandImages2, playerHandTotal, dealerHandTotal, playerStands, playerDoubles, playerDoubleBet, playerSplits, playerBet, playerBankroll, bet1, bet5, bet25, bet50, bet100, bet500, playerClickedStand, playerClickedDouble, playerClickedSplit, dealerWins, playerWins, playerBust, dealerBust, clearBet, gameCount, hideShowCount, cardsDealt, decksPlayed, remainingCards, remainingDecks, trueCount, playerBaseBet, playerHand2Total, showCountDiv, showAdviceDiv, hideShowAdvice, playerAdvantage, dealerCardBackShowing } = props;

    function tableStatus(){
        // console.log('did dealer win: ' + dealerWins);
        // console.log('did player bust: ' +  playerBust); 
        if((playerHandTotal && dealerWins) || (playerHandTotal && playerBust)){
            return <h1 className='tableOutcome'>Dealer Wins</h1>
        } else if( (playerHandTotal && playerWins) || (playerHandTotal && dealerBust) ){
            return <h1 className='tableOutcome'>Player Wins</h1>
        } else if(playerHandTotal && playerHandTotal === dealerHandTotal && playerClickedStand ){
            return <h1 className='tableOutcome'>Push</h1>
        } else { 
            return <h1 className='h1TablePlaceholder'>Nothing Here</h1>
        }
    }
    const stat = tableStatus()

    function doubleDown(){
        //console.log('did player click double: ' + playerClickedDouble)
        if (playerClickedDouble){
            return playerDoubleBet
        }
    }
    const dbl = doubleDown()

    function optimalBetSize(){
        if(trueCount >= 1){
            return  ( (Math.round(trueCount) * playerBaseBet) )
        }else {
            return playerBaseBet
        }
        
    }

    function splitHands(){
        if(playerClickedSplit){
        return <h2>Player Total Hand 2: {playerHand2Total} </h2>
        }
    }

    function showCount(){
        if (showCountDiv){
            return <span>Hide Count</span>
        }else {
            return <span>Show Count</span>
        }
    }

    function showAdvice(){
        if (showAdviceDiv){
            return <span>Hide Help</span>
        }else {
            return <span>Show Help</span>
        }
    }

    const showTheCount = showCount()
    const showTheAdvice = showAdvice()
    const splitTheseCards = splitHands()
    const betSize = optimalBetSize()
    return (
        <div className='playContainer'>
            <div className='table'>
                <div className='dealerHand'>
                {dealerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}
                <img className={dealerCardBackShowing? 'cardBackVisible' : 'cardBackHidden'} src={cardBack } alt=''></img>
                </div>

                <div className='statsContainer'>
                <button className='showHelpButton' onClick={hideShowAdvice} > {showTheAdvice}</button>
                <div className={showAdviceDiv ? 'showAdvice' : 'hideAdvice'}>
                    <h2 className='helpTitle'>Help</h2>
                    <h3 className='handTotals'>Dealer Total: {dealerHandTotal}</h3>
                    <h3 className='handTotals'>Player Total: {playerHandTotal} </h3>
                </div>
                    <div className={showCountDiv ? 'showCountStats' : 'hideCountStats'}>
                        <h2 className='helpTitle'>Count Stats:</h2>
                        <h3 className='handTotals'>Running Count: {gameCount} </h3>
                        <h3 className='handTotals'>True Count: {trueCount} </h3>
                        <h3 className='handTotals'>Cards Dealt: {cardsDealt} </h3>
                        <h3 className='handTotals'>Remaining Cards: {remainingCards} </h3>
                        <h3 className='handTotals'>Player Advantage: {playerAdvantage}% </h3>
                        <h3 className='handTotals'>Optimal Bet: {betSize }</h3> 
                    </div>
                    <button className='showCountButton' onClick={hideShowCount} > {showTheCount}</button>
                </div>

                <div className='centerTableOptions'>
                    
                    <button className='dealHandButton' onClick={dealHand} >Deal Hand</button><br></br>
                    <div>
                    <button className='playButtons' onClick={dealOneCard} >Hit</button>
                    <button className='playButtons' onClick={playerStands} > Stand </button>
                    <button className='playButtons' onClick={playerDoubles} > Double </button>
                    <button className='playButtons' onClick={playerSplits} > Split </button>
                    { stat }
                    </div>
                    
                </div>
              
                {splitTheseCards}
                <div className='chipContainer'>
                    <img src={oneDollar} onClick={bet1} alt='chip' className='pokerChip'></img>
                    <img src={fiveDollar} onClick={bet5} alt='chip' className='pokerChip'></img>
                    <img src={twentyFiveDollar} onClick={bet25} alt='chip' className='pokerChip'></img>
                    <img src={fiftyDollar} onClick={bet50} alt='chip' className='pokerChip'></img>
                    <img src={hundredDollar} onClick={bet100} alt='chip' className='pokerChip'></img>
                    <img src={fiveHundredDollar} onClick={bet500} alt='chip' className='pokerChip'></img>
                </div>

                <div className='playerHand'>
                    {playerHandImages.map(dealtCard => <DisplayACard card={dealtCard} />)}                 
                </div>
                <SplitHand playerClickedSplit={playerClickedSplit} splitCards={playerHandImages2} />
                {/* <Hand playerClickedSplit={playerClickedSplit} playerHandImages={playerHandImages} card={dealtCard} /> */}
                
                <div className='bankOptions'>
                    <div className='deckInfo' >
                        <h2 className='helpTitle'>Deck Stats</h2>
                        <h3 className='handTotals'>Decks Played: {decksPlayed}</h3>
                        <h3 className='handTotals'>Remaining Decks: {remainingDecks} </h3>
                    </div>
                    
                    <div className='bankStats'>
                        <h2  className='helpTitle'>Player Bankroll: ${playerBankroll} </h2>
                        <h3  className='handTotals'>Player Bet: ${playerBet} </h3>
                        <h3  className='handTotals'>Double Bet: ${dbl}</h3>
                    </div>
                    <button className='clearBetButton' onClick={clearBet} > Clear Bet </button>
                </div>
            </div>
        </div>
    )
}

export default Play