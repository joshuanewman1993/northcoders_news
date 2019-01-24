import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/Users.css'
import picture from '../images/user6.png'
class Users extends Component {
    state = {
        users: []
    }
    render() {
        console.log('here')
        const { users } = this.state
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
            .catch(err => console.log(err))
    }
}

export default Users;
