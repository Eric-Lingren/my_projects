import React from 'react';
import './podcast-list-styles.css'
let episodeData = require('../episode-data.json')

function PodcastList() {
    let mappedEpisodes = episodeData.episodes.map((episode, index) => {
        return(
            <div className='podcast-episode-card' key={index}>
                <div className='title-wrapper'>
                    <h4 className='episode-number'> Episode { episode.number }: </h4>
                    <h3 className='episode-title'> { episode.title } </h3>
                </div>
                <p className='episode-description'> { episode.description } </p>
                {
                    episode.bullets.map((bullet, index)=> {
                        return(
                            <li className='bullet-point' key={index}>{bullet}</li>
                        )
                    })
                }
                
                <a className='episode-url' href={episode.url} target='_blank' rel="noopener noreferrer"> Listen Here </a>
            </div>
        )
    })

    return (
        <div className="podcast-list-wrapper">
            <h1 className='title'> A2B Podcast </h1>
            <div className='episodes-container'>
                {mappedEpisodes}
            </div>
        </div>
    );
}

export default PodcastList;
