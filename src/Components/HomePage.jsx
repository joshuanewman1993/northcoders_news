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
                    <Link to='/topics/cooking/articles'>See the latest cooking articles..</Link>

                </li>
                <li className='listItem'>
                    <img src={coding} alt='coding'></img>
                    <Link to='/topics/coding/articles'>See the latest coding articles..</Link>

                </li>
                <li className='listItem'>
                    <img src={football} alt='football'></img>
                    <Link to='/topics/football/articles'>See the latest football articles..</Link>

                </li>
            </ul>
        </div>
    );
}

export default HomePage;
