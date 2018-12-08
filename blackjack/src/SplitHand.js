import React from 'react'
import DisplayACard from './DisplayACard'

const SplitHand = (props) => {
    const {card, playerClikedSplit, splitCards} = props;

    return (
        <div className={playerClikedSplit === true ? 'splitHand' : 'displayNone'}>
            {props.splitCards.map(dealtCard => <DisplayACard card={splitCards} />)}
        </div>
    )
}

export default SplitHand

