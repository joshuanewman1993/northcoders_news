import React, { Component } from 'react';
import * as api from '../Utils/api'
import '../CSS/TopicForm.css'
import { navigate } from '@reach/router'
import Error from './Error'

class AddTopic extends Component {
    state = {
        description: '',
        slug: '',
        hasError: false,
        topics: []
    }
    render() {
        const { hasError, topics } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (

            <div className='addTopic'>
                <h2>Add a topic...</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <label htmlFor='slug' ><h2>Topic</h2></label>
                        <input id='slug' type='text' value={this.state.slug} onChange={this.handleChange} required></input>
                    </div>
                    <div className='row'>

                        <label htmlFor='description' ><h2>Description</h2></label>
                        <textarea id='description' type='text' value={this.state.description} onChange={this.handleChange} required></textarea>
                    </div>


                    <button className='topicbutton' type='submit'>Add Topic</button>
                </form>
            </div >
        );
    }
    componentDidMount() {
        api.fetchTopics()
            .then(topics => {
                this.setState({
                    topics: topics
                })
            })
    }
    //component did mount
    //fetch topics, api call and store in state
    // 
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
            .then(() => navigate('/topics'))
            .then(() => this.setState({
                description: '',
                slug: ''
            }))
            .catch(err => this.setState({
                hasError: err
            }))
    }
}

export default AddTopic;