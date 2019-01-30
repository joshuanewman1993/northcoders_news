import React, { Component } from 'react';
import * as api from '../Utils/api'
import Error from './Error'
import '../CSS/ShowUsers.css'

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
            <select>
                {
                    users.map(user => <option>{user.username}</option>)
                }
            </select>
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