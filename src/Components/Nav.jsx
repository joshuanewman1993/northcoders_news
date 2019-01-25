import React from 'react';
import { Link } from '@reach/router'
import '../CSS/Navbar.css'

const Nav = ({ user }) => {
    return (
        <nav className='navbar'>
            <Link className='nav' to='/'>Home</Link>

            <Link className='nav' to='/topics'>Topics</Link>

            <Link className='nav' to='/articles'>Articles</Link>

            <Link className='nav' to='/users'>Users</Link>

            <Link className='nav' to='/add-article' >Add Article</Link>

            <Link className='nav' to='/add-topic' >Add Topic</Link>

        </nav>
    );
};

export default Nav;