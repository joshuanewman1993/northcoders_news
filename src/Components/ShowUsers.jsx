import React, { Component } from 'react';
import * as api from '../Utils/api'
import Error from './Error'

class ShowUsers extends Component {
    state = {
        users: [],
        hasError: false
    }
    render() {
        const { hasError } = this.state
        const { users } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
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
            .catch(err => this.setState({
                hasError: err
            }))
    }
}

export default ShowUsers;   