import React from 'react';
import '../CSS/Home.css';
import { Link } from '@reach/router'
import MostRecentArticles from './MostRecentArticles';
import MostPopularArticles from './MostPopularArticles';




const HomePage = () => {
    return (
        <div className='Home'>
            <h1>Welcome to <b>NFC news</b>, a place where words matter. </h1>
            <ul className='item'>

                <li className='listItem'>
                    <h2>Trending</h2>
                    <MostRecentArticles />
                </li>
                <li className='listItem'>
                    <h2>Most Popular</h2>
                    <MostPopularArticles />
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
