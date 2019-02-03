import React from 'react';
import '../CSS/Header.css'

const Header = (props) => {
    return (
        <div className='header'>
            <div className='left'><h1>NORTHCODERS NEWS</h1></div>
            <div className='right'>
                <p>Welcome {props.user.name}</p>
                <br></br>
                <p>Username: {props.user.username}</p>
                <p></p>
            </div>
        </div >
    );
};

export default Header;