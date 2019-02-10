import React from 'react';
import { Link } from '@reach/router'
import '../CSS/Navbar.css'
import Logout from './Logout'
const Nav = (props) => {
    console.log(props)
    return (
        <nav className='navbar'>
            <Link className='nav' to='/'>Home</Link>

            <Link className='nav' to='/topics'>Topics</Link>

            <Link className='nav' to='/articles'>Articles</Link>

            <Link className='nav' to='/users'>Users</Link>

            <Link className='nav' to='/add-article' >Add Article</Link>

            <Link className='nav' to='/add-topic' >Add Topic</Link>

            <Logout logout={props.logout} />

        </nav>
    );
};

export default Nav;