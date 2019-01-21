import React, { Component } from 'react';
import * as api from '../Utils/api'

class Users extends Component {
    state = {
        users: []
    }
    render() {

        return (
            <div>
                <h1>Users here</h1>

            </div>
        );
    }
    componentDidMount() {
        this.fetchUsers();
    }
    fetchUsers = () => {
        api.fetchUsers()
            .then(users => {
                this.setState(() => ({
                    users: users
                }))
            })
            .catch(err => console.log(err))
    }
}

export default Users;
