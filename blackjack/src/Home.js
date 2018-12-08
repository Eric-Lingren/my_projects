import React from 'react'
import './css/home.css'
import homeLogo from './css/images/blackjackLogo.jpg'

const Home = () => {

    return (
        <div className='homeWrapper'>
            <h1 className='homeText'>So you want to be a card counter...? </h1>
            <img className='homeLogo' src={homeLogo}></img>
            <h1 className='homeText'>You better start by learning! </h1>
        </div>
    )
}

export default Home