import React from 'react';
import '../CSS/Header.css'
import Logout from './Logout';

const Header = (props) => {
    return (
        <div className='header'>
            <div className='left'><h1>NORTHCODERS NEWS</h1></div>
            <div className='right'>
                <p>Welcome {props.user.name}</p>
                <br></br>
                <p>Username: {props.user.username}</p>
                <p></p>
                <Logout logout={props.logout} />
            </div>
        </div >
    );
};

export default Header;