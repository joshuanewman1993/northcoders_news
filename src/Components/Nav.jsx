import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            {' | '}
            <Link to='/topics'>Topics</Link>
            {' | '}
            <Link to='/articles'>Articles</Link>
            {' | '}
            <Link to='/users'>Users</Link>



        </div>
    );
};

export default Nav;