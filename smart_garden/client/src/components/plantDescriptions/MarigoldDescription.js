import React from 'react';
import '../../css/plantDescriptions.css';
import marigold from './plantImages/marigold.jpg'

const MarigoldDescription = () => {

    return(

            <div>
                <h4 className='title'>Marigold</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={marigold} alt='marigold'></img>

                    <ul>
                        <li>Not good for beans and cabbage</li>
                        <li>Repels squash bugs, cucumber & asparagus beetles, nematodes, beet leaf hoppers, Mexican bean beetle, tomato worm, rabbits and deer</li>
                        <li>Hybrids are less effective than heirlooms</li>
                        <li>Tends to attract spider mites and slugs</li>
                        <li>French marigold roots produce a chemical that is an effective pestitide for many years</li>
            </ul>
                </div>
            </div>
    )  
}

export default MarigoldDescription