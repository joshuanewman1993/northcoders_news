import React, { Component } from 'react';
import * as api from '../Utils/api'

class AddArticle extends Component {
    state = {
        description: '',
        slug: ''
    }
    render() {
        return (
            <div>
                <h2>Add Article</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='description' >Description</label>
                    <input id='description' type='text' value={this.state.description} onChange={this.handleChange}></input>

                    <label htmlFor='slug' >Slug</label>
                    <input id='slug' type='text' value={this.state.slug} onChange={this.handleChange}></input>

                    <button type='submit'>Add Topic</button>
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
        const { description, slug } = this.state
        event.preventDefault();
        api.addTopic(description, slug)
        this.setState({
            description: '',
            slug: ''
        })
    }
}

export default AddArticle;