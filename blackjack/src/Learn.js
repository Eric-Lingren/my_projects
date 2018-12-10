import React from 'react'
import './css/learn.css'

const Learn = () => {

    return (
        <div className='learnWrapper'>

            <div className='learnContainer'>
            <h1 className='pageHeading'>Learn Blackjack</h1>

            <h1 className='levelHeading1'> Level 1: White Belt </h1>
            <h1 className='levelHeading2'> Starting with the fundamentals... </h1>
            <p className='paragraphText'>
            Blackjack is beatable.  Here is where you learn how to do it.  This is a very simple game, but it is a game of mathematics not a game of luck or gambling.  There are correct decisions you can make that turn the casino's advantage into your advantage.  My webisite is designed to help the average card player turn into an extraordinary card player.  We have everything you need to improve your play.  Please note that all the drills and calculations on this site are for casino rules where the dealer stands on all 17's.  Enhanced features and more in depth playing rules will be added in the future.
            </p>

            <h1 className='levelHeading1'> Level 2: Orange Belt </h1>
            <h1 className='levelHeading2'> What is basic strategy...? </h1>
            <p className='paragraphText'>
            Basic strategy is the mathamatically correct play for every combination of cards.  There are 312 diffent play combinations to remember and every one is different.  You can practice them all on the training page!  Make sure to reference a basic strategy chart.  Once you can play basic strategy perfectly on every hand, you will reduce the casino advantage from about 10% to 0.5%.
            </p>

            <h1 className='levelHeading1'> Level 3: Blue Belt </h1>
            <h1 className='levelHeading2'> What is card counting...? </h1>
            <p className='paragraphText'>
            Card counting is not a mysterious and magical skill.  Anyone can learn it.  Learning basic strategy is actually much more complex than learning to count cards so if you have already done that, the hard part is out of the way!  Counting is simply keeping track of what cards have already been played in order to better predict the cards that will be played in the future.  Each card is assigned an arbitrary value.  2-6 are assigned a value of +1, 7-9 are assigned a value of 0 and we ignore them.  10, face, and ace's are assigned a value of -1.  When more high cards are played we know that there will be more low cards in the future and vice versa.  We keep track of this with the running count.  Remember that a positive count is good for the player and a negative count is good for the casino.
            </p>

            <h1 className='levelHeading1'> Level 4: Purple Belt </h1>
            <h1 className='levelHeading2'> Running count vs true count...? </h1>
            <p className='paragraphText'>
            Now that we have learned how to keep track of the running count, we need to be able to calculate our exact advantage over the casino by converting the running count into the true count.  Again, this is not complex.  Simply divide the running count by how many decks are left to be played!  For each true count of 1, the advantage shifts to the player by 0.5%.  For example if the running count is +8 and there are 2 decks left, that puts the true count at +4.  This means the player now has a 3.5% advantage over the casino (remember that if we play perfect basic strategey the casino still has a 0.5% advantage.)  Card counting is really that simple!
            </p>

            <h1 className='levelHeading1'> Level 5: Brown Belt </h1>
            <h1 className='levelHeading2'> How to Bet...? </h1>
            <p className='paragraphText'>
            Now is where we apply our advantage and make money.  Why should we only bet the table minimum bet if we know that we now have a 3.5% advantage over the casino?  We wouldn't! When we have the advantage we need to bet large!  There is a wide varitey of opinions on how to do this, but the general rule of thumb is for every time the true count increases by 1 we need to double our bet.  By following all these rules it is possible to make your minimum bet size every for hour of playing.
            </p>

            <h1 className='levelHeading1'> Level 5: Black Belt </h1>
            <h1 className='levelHeading2'> Whats next...? </h1>
            <p className='paragraphText'>
            You now know the basics of how to count cards!  If this is something you are interested in learning more about there are a varitey of resources online.  Please use all the training drills and games on this site to practice and improve both your skills and speed.  You cant play professionally until you train like a professional.
            </p>

            </div>
        </div>
    )
}

export default Learn