import React, { Component } from 'react';
import * as api from '../Utils/api'

class Users extends Component {
    state = {
        users: []
    }
    render() {
        console.log('here')
        const { users } = this.state
        return (
            <div>
                {
                    users.map(user => <li>{user.username}</li>)
                }

            </div>
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
                }), () => console.log(this.state))
            })
            .catch(err => console.log(err))
    }
}

export default Users;
