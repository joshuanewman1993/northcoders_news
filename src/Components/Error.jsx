import React from 'react';
import { Link } from '@reach/router';

const Error = ({ err }) => {
    return (
        <div>
            <p>Oops..Something went wrong :( <Link to='/'>Go Home</Link></p>
            <b><p>{err.response.data.msg}</p></b>
        </div>
    );
};

export default Error;