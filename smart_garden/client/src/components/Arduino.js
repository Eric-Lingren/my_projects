import React from 'react';
import Navbar from './Navbar';
import '../css/help.css'
import {Link} from 'react-router-dom'

const Arduino = () => {

    return (
        <div>
            <Navbar />

            <div className='helpWrapper'>
                
                <h1 className='helpTitle'>Arduino Plugins Are Here!</h1>
                <h2 className='helpSubtitle'>
                Upgrade from SmartGarden to GeniusGarden with Arduino technology!
                </h2>
                
                <div>
                    
                    <p className='textContent'>
                        Genius Garden takes your gardening to a whole new level.  Combine your Arduino skill with our platform and get even better gardening recomendations.
                    </p>
                <h3 className='step'>How It Works:</h3>
                    <p className='textContent'>
                        Build your own custom arduino with sunlight, PH, temperature, humidity and/or mositure sensors.  
                        Send the data to our website and recieve ultra-custom planting recomendations based on data you've collected from your own yard!
                    </p>

                    <div className='arduinoLinkContainer'>
                        <h2 className='checkItOut'>Check it out here:</h2>
                        <Link className='ArduinoLink' to="/"> GeniusGarden.com </Link>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Arduino