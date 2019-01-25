import React, { Component } from 'react';
import { Link, Router } from '@reach/router'
import * as api from '../Utils/api'
import AddTopic from './AddTopic';
import '../CSS/Topics.css'
import Error from './Error'


class Topics extends Component {
    state = {
        topics: [],
        toPage: false,
        hasError: false


    }
    render() {
        const { topics, hasError } = this.state
        if (hasError) {
            return <Error err={hasError} />
        }
        return (
            <div className='topicsDiv'>
                <h3>The lastest trending topics...</h3>
                <Link to='/add-topic'><h4>Click here if you wish to add a topic!</h4></Link>
                <br></br>
                <ul className='topics'>
                    {
                        topics.map(topic => <li className='topicsItem' key={topic.slug}><Link to={`${topic.slug}/articles`}> <p>{topic.slug}</p></Link></li>)
                    }
                </ul>
                <Router>
                    <AddTopic path='add-topic' />
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
            .catch(err => this.setState({
                hasError: err
            }))
    }

}




export default Topics;
