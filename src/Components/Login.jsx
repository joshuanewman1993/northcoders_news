import React, { Component } from 'react';
import '../CSS/Login.css'


class Login extends Component {
    state = {
        username: ''
    }
    render() {
        const { username } = this.state;
        const { user } = this.props;
        return user ?
            <> {this.props.children}</>
            // <h1>Hello</h1>
            : (
                <div className='login'>
                    <h1>Welcome to Northcoders News</h1>
                    <div className='form'>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor='username'>Login with username</label>
                            <input id='username' onChange={this.handleChange} value={username} />
                            <button>Submit</button>
                        </form >
                    </div>
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
}

export default Login;
