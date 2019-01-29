import React, { Component } from 'react';
import { navigate } from '@reach/router';
import * as api from '../Utils/api';
import Error from './Error';
import '../CSS/AddArticle.css';


class AddArticle extends Component {
    state = {
        title: '',
        body: '',
        username: this.props.user.username,
        topic: '',
        hasError: false,
        topics: []
    }
    render() {
        const { user } = this.props

        const { hasError, topics } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            <div>
                <h2>Add Article...</h2>
                <form onSubmit={this.handleSubmit}>

                    <label htmlFor='title' ><h2>Title</h2></label>
                    <input id='title' type='text' value={this.state.title} onChange={this.handleChange} required></input>

                    <label htmlFor='topic' ><h2>Topic</h2></label>

                    <select className='topicSelect' value={this.state.topic} onChange={this.handleTopicSelect} required >
                        {
                            topics.map(topic => <option value={topic.slug}>{topic.slug}</option>)
                        }
                    </select>
                    <br></br>


                    <label htmlFor='body' ><h2>Body</h2></label>
                    <textarea id='body' type='text' value={this.state.body} onChange={this.handleChange} required></textarea>

                    <button type='submit' className='articleButton'>Add Article</button>
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
    handleChange = (event) => {
        const { id } = event.target
        console.log(id)
        this.setState({
            [id]: event.target.value,
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
                    topic: '',
                    toPage: !toPage
                }))
            .then(() => navigate('/articles/added'))
            .catch(err => this.setState({
                hasError: err
            }))
    }

    handleTopicSelect = (event) => {
        const { value } = event.target;
        console.log(value)
        this.setState({
            topic: value,
        });
    };

}


export default AddArticle;