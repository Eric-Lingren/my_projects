import React from 'react';
import '../../css/plantDescriptions.css';
import dill from './plantImages/dill.jpg'

const DillDescription = () => {

    return(

            <div>
                <h4 className='title'>Dill</h4>
                <div className='plantDescriptionWrapper'>

                    <img src={dill} alt='dill'></img>

                    <ul>
                        <li>Attracts praying mantises, ladybugs, parasitoid wasps, hoverflies, bees, Swallowtail butterfly caterpillars and spiders</li>
                        <li>Dill can cross polinate with carrots if left to seed, ruining both crops.</li>
                        <li>Repeals aphids, cabbage looper, spider mites and squash bugs</li>
                        <li>Attracts tomato hornworms </li>
                    </ul>
                </div>
            </div>
    )  
}

export default DillDescription
