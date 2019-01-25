import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/Users.css'
import picture from '../images/user6.png'
import Error from './Error'

class Users extends Component {
    state = {
        users: [],
        hasError: false

    }
    render() {
        const { users, hasError } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            <div>
                <ul className='users'>
                    {
                        users.map(user => <li className='usersList'>
                            <p> <b>Username:</b> {user.username}</p>
                            <p> <b>Name:</b> {user.name}</p>
                            <p><img src={picture} alt='user' width='80px' height='80px'></img></p>
                        </li>)
                    }
                </ul>
            </div >
        );
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = () => {
        api.fetchAllUsers()
            .then(users => {
                this.setState(() => ({
                    users: users
                }))
            })
            .catch(err => this.setState({
                hasError: err
            }))
    }
}

export default Users;
