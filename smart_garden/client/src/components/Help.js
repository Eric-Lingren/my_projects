import React from 'react';
import Navbar from './Navbar';
import '../css/help.css'

const Help = () => {

    return (
        <div>
            <Navbar />

            <div className='helpWrapper'>
                
                <h1 className='helpTitle'>Need Some Help?</h1>
                <h2 className='helpSubtitle'>
                    Welcome to the worlds most innovative and flexible garden planning tool!
                </h2>
                
                <div>
                    
                    <p className='textContent'>
                        With SmartGarden you are able to get guidance and automated suggestions on how to most optimally design your vegatable garden.
                        SmartGarden uses the science of companion planting combined with the power of technology to give you the most accurace and optimized custom reccomendations.
                    </p>
                <h3 className='step'>Step 1:</h3>
                    <p className='textContent'>
                        Create a new garden by entering a height and a width.  Click create to see your empty garden.
                    </p>

                    <h3 className='step'>Step 2:</h3>
                    <p className='textContent'>
                        Select a plant from the "Add Plant To Garden" dropdown.  Click a plot in your garden to plant.  You will have customized suggestions appear 
                        for neighbor plants which you can hover over to get more info.
                    </p>

                    <h3 className='step'>Step 3:</h3>
                    <p className='textContent'>
                        If you want a plant that is not on the list, simply add it in the "Add Plant To List" box.  If you want a custom image to appear when you plant, 
                        make sure you add that image to your choices with a URL of any image you like!  Dont worry, the SmartGarden will automatically resize any image you choose.

                    </p>

                    <h3 className='step'>Step 4:</h3>
                    <p className='textContent'>
                        If you wish to save your garden, simply give it a name and a year and save it!  You can find it again in the "My Gardens" 
                        list at the top of the page.  You can load or delete any saved garden.
                    </p>

                    <h3 className='step'>Step 5:</h3>
                    <p className='textContent'>
                        Get outside and start gardening!  Happy Planting!  
                    </p>

                </div>
            </div>
            
        </div>
    )
}

export default Help