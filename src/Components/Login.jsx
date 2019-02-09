import React, { Component } from 'react';
import '../CSS/Login.css'
import * as api from '../Utils/api';
import Users from './Users';
import logo from '../images/logo.png'


class Login extends Component {
    state = {
        username: '',
        users: []
    }
    render() {
        const { username, users } = this.state;

        const { user } = this.props;
        const loggedIn = user.hasOwnProperty('username')
        return (loggedIn)
            ?
            <> {this.props.children}</>
            : (
                < div className='login' >
                    <img src={logo} className='logo'></img>
                    <h1 className='loginTitle'>Welcome to Northcoders News</h1>
                    <div className='form'>
                        <form onSubmit={this.handleSubmit}>
                            <select value={this.state.username} onChange={this.handleChange}>
                                {
                                    users.map(user => <option value={user.username}>{user.username}</option>)
                                }
                            </select>
                            <br></br>
                            <button className='loginButton'>Submit</button>
                        </form >

                    </div>

                </div >
            )
    }
    componentDidMount() {
        this.fetchUsers();
    }
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            username: value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state.username)
        this.setState({
            username: ''
        })
    }
    showUsers = () => {
        const { hidden } = this.state
        this.setState({
            hidden: !hidden
        })
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

export default Login;
