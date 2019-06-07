import React from 'react';
import PodcastList from '../podcast-list/PodcastList'
import { withAuthProvider } from '../context/AuthProvider'
import './home-styles.css'

function Home(props) {
    return (
        <div className={props.isAuthenticated? 'home' : 'user-not-authenticated'}>
            <PodcastList />
        </div>
    );
}

export default withAuthProvider(Home);
