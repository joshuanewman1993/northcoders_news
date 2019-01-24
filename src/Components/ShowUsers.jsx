import React, { Component } from 'react';
import * as api from '../Utils/api'

class ShowUsers extends Component {
    state = {
        users: []
    }
    render() {
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
                }))
            })
            .catch(err => console.log(err))
    }
}

export default ShowUsers;   