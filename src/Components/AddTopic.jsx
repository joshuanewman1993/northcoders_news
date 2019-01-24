import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/TopicForm.css'
import { navigate } from '@reach/router'
class AddTopic extends Component {
    state = {
        description: '',
        slug: '',
    }
    render() {

        return (
            <div className='addTopic'>
                <h2>Add a topic...</h2>
                <form onSubmit={this.handleSubmit}>
                    <div class='row'>
                        <label htmlFor='slug' >Topic</label>
                        <input id='slug' type='text' value={this.state.slug} onChange={this.handleChange}></input>
                    </div>
                    <div class='row'>

                        <label htmlFor='description' >Description</label>
                        <textarea id='description' type='text' value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>


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
        const { description, slug, dashboard } = this.state
        event.preventDefault();
        api.addTopic(description, slug)
        navigate('/topics')
        this.setState({
            description: '',
            slug: ''
        })
    }
}

export default AddTopic;