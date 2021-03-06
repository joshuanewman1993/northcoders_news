import React from 'react';
import '../CSS/Home.css';
import MostRecentArticles from './MostRecentArticles';
import MostPopularArticles from './MostPopularArticles';




const HomePage = () => {
    return (
        <div className='Home'>
            <h1>Welcome to <b>NC news</b>, a place where words matter. </h1>
            <ul className='item'>

                <li className='listItem'>
                    <h2 className='homeHeader'>Trending Articles</h2>
                    <MostRecentArticles />
                </li>
                <li className='listItem'>
                    <h2 className='homeHeader'>Most Popular Articles</h2>
                    <MostPopularArticles />
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
