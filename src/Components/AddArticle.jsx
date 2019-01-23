import React, { Component } from 'react';
import * as api from '../Utils/api'

class AddArticle extends Component {
    state = {
        title: '',
        body: '',
        username: '',
        topic: ''
    }
    render() {
        return (
            <div>
                <h2>Add Article</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title' >title</label>
                    <input id='title' type='text' value={this.state.title} onChange={this.handleChange}></input>

                    <label htmlFor='topic' >topic</label>
                    <input id='topic' type='text' value={this.state.topic} onChange={this.handleChange}></input>

                    <label htmlFor='body' >body</label>
                    <input id='body' type='text' value={this.state.body} onChange={this.handleChange}></input>

                    <label htmlFor='username' >username</label>
                    <input id='username' type='text' value={this.state.username} onChange={this.handleChange}></input>

                    <button type='submit'>Add Article</button>
                </form>
            </div>
        );
    }
    handleChange = (event) => {
        const { id } = event.target
        this.setState({
            [id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        const { title, body, username, topic } = this.state
        event.preventDefault();
        api.addArticle(title, body, username, topic)
        this.setState({
            title: '',
            body: '',
            username: '',
            topic: ''
        })
    }
}

export default AddArticle;