import React, { Component } from 'react';
import '../CSS/Login.css'
import ShowUsers from './ShowUsers';


class Login extends Component {
    state = {
        username: '',
        hidden: false
    }
    render() {
        const { username } = this.state;
        const { user } = this.props;
        console.log(username)
        return user ?
            <> {this.props.children}</>
            : (
                <div className='login'>
                    <h1>Welcome to Northcoders News</h1>
                    <div className='form'>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='username'>Login with username</label>
                            <input id='username' onChange={this.handleChange} value={username} required />
                            <button>Submit</button>

                        </form >
                        {
                            this.state.hidden && <ShowUsers />
                        }
                    </div>
                    <button onClick={this.showUsers}>View the username's to login with.</button>

                </div>
            )
    }
    handleChange = (event) => {
        const { id, value } = event.target
        this.setState({
            [id]: value
        })
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

}

export default Login;
