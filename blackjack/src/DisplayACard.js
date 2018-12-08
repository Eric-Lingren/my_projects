import React from 'react'

const DisplayCard = (props) => {
    const {card} = props;

    return(
            <img className='displayCard' src={card} alt='card displayed'></img>
    )
}

export default DisplayCard