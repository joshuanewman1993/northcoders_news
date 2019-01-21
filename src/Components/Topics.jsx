import React, { Component } from 'react';
import { Link, Router } from '@reach/router'
import * as api from '../Utils/api'
import ArticlesByTopic from './ArticlesByTopic';

class Topics extends Component {
    state = {
        topics: [],
    }
    render() {
        const { topics } = this.state
        return (
            <div>
                <ul className='topics'>
                    {
                        topics.map(topic => <li className='listItem' key={topic.slug}><Link to={topic.slug}> <p>{topic.slug}</p></Link></li>)
                    }
                </ul>

            </div>
        );
    }
    componentDidMount() {
        this.fetchTopics();
    }
    fetchTopics = () => {
        api.fetchTopics()
            .then(topics => {
                this.setState(() => ({
                    topics
                }))
            })
            .catch(err => console.log(err))
    }
}




export default Topics;
