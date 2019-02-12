import React from 'react';
import '../CSS/Header.css'
import logo from '../images/logo.png'
const Header = (props) => {
    return (
        <div className='header'>
            <div className='red'></div>
            <div className='left'><h1> <img src={logo} className='logo' alt='logo'></img>Northcoders News</h1></div>
            <div className='right'>
                <p>Welcome {props.user.name}</p>
                <p>Username: {props.user.username}</p>
                <br></br>
            </div>
        </div >
    );
};

export default Header;