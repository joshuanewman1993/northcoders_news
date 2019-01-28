import React from 'react';
import '../CSS/Home.css';
import seafood from '../images/seafood.jpg';
import coding from '../images/javascript.jpg'
import football from '../images/football.jpg'
import { Link } from '@reach/router'




const HomePage = () => {
    return (
        <div className='Home'>
            <h1>Welcome to <b>NFC news</b>, a place where words matter. </h1>
            <ul className='item'>

                <li className='listItem'>
                    <img src={seafood} alt='seafood'></img>
                    <p>New</p>
                </li>
                <li className='listItem'>
                    <img src={coding} alt='coding'></img>
                    <p>Popular</p>

                </li>
                <li className='listItem'>
                    <img src={football} alt='football'></img>
                    <p>Trending</p>

                </li>
            </ul>
        </div>
    );
}

export default HomePage;
