import React, { Component } from 'react';
import { navigate } from '@reach/router'
import * as api from '../Utils/api'
import Error from './Error'


class AddArticle extends Component {
    state = {
        title: '',
        body: '',
        username: '',
        topic: '',
        hasError: false
    }
    render() {
        const { hasError } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            <div>
                <h2>Add Article</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='title' ><h2>Title</h2></label>
                    <input id='title' type='text' value={this.state.title} onChange={this.handleChange}></input>

                    <label htmlFor='topic' ><h2>Topic</h2></label>
                    <input id='topic' type='text' value={this.state.topic} onChange={this.handleChange}></input>

                    <label htmlFor='body' ><h2>Body</h2></label>
                    <textarea id='body' type='text' value={this.state.body} onChange={this.handleChange}></textarea>

                    <label htmlFor='username' ><h2>Username</h2></label>
                    <input id='username' type='text' value={this.state.username} onChange={this.handleChange}></input>

                    <button type='submit'>Add Article</button>
                </form>
            </div >
        );
    }
    handleChange = (event) => {
        const { id } = event.target
        this.setState({
            [id]: event.target.value
        })
    }
    handleSubmit = (event) => {
        const { title, body, username, topic, toPage } = this.state
        event.preventDefault();
        api.addArticle(title, body, username, topic)
            .then(() =>
                this.setState({
                    title: '',
                    body: '',
                    username: '',
                    topic: '',
                    toPage: !toPage
                }))
            .then(() => navigate('/articles/added'))
            .catch(err => this.setState({
                hasError: err
            }))
    }
}

export default AddArticle;