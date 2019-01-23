import React, { Component } from 'react';
import { Link, Router } from '@reach/router'
import * as api from '../Utils/api'
import AddTopic from './AddTopic';
import '../CSS/Topics.css'

class Topics extends Component {
    state = {
        topics: [],
    }
    render() {
        const { topics } = this.state

        return (
            <div className='topicsDiv'>
                <h3>The lastest trending topics...</h3>

                <ul className='topics'>
                    {
                        topics.map(topic => <li className='listItem' key={topic.slug}><Link to={`${topic.slug}/articles`}> <p>{topic.slug}</p></Link></li>)
                    }
                </ul>
                <Link to='/topics/add'>Add Topic</Link>
                <Router>
                    <AddTopic path='add' />
                </Router>
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
