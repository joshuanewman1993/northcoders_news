import React from 'react';

const Logout = (props) => {
    return (
        <div>
            <button type='submit' onClick={props.logout} >Logout</button>
        </div >
    );
}

export default Logout;
