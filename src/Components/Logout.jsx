import React from 'react';
import '../CSS/Logout.css';
const Logout = (props) => {
    return (
        <div className='logout'>
            <button type='submit' className='logoutbutton' onClick={props.logout} >Logout</button>
        </div >
    );
}

export default Logout;
