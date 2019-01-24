import React from 'react';
import '../CSS/Home.css';
import seafood from '../images/seafood.jpg';
import coding from '../images/javascript.jpg'
import football from '../images/football.jpg'




const HomePage = () => {
    return (
        <div className='Home'>
            <h1>Welcome to <b>NFC news</b>, a place where words matter. </h1>
            <ul className='item'>
                <li className='listItem'>
                    <img src={seafood} alt='seafood' width="300px" height="150px"></img>
                </li>
                <li className='listItem'>
                    <img src={coding} alt='seafood' width="300px" height="150px"></img>
                </li>
                <li className='listItem'>
                    <img src={football} alt='seafood' width="300px" height="150px"></img>
                </li>
            </ul>
        </div>
    );
}

export default HomePage;
